import { IProgramData } from '@/common/interface/program.interface';
import Plyr from 'plyr';
import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { quillEditor } from 'vue-quill-editor';
import {
  checkVideoIdYoutube,
  convertImageUrl,
} from '../../common/utils/helper';
import { initProgramData } from '../../common/utils/initialValue';
import filePlaceholder from '../../components/form/FilePlaceholder.vue';
import inputLabel from '../../components/form/InputLabel.vue';
import { FileModule } from '../../store/modules/file';

@Component({
  name: 'FormProgram',
  components: {
    inputLabel,
    quillEditor,
    filePlaceholder,
  },
})
export default class FormProgram extends Vue {
  @Prop(Boolean) readonly dialog: boolean | undefined;

  $refs: any;
  $emit: any;
  programAccessDeadline: boolean = false;
  videoPreviewValid: boolean = false;
  videoPreviewId: string = '';
  minProgramAccessDeadline: string = new Date().toISOString().substr(0, 7);
  program: IProgramData = initProgramData;
  fileContainer: any = null;

  content: string = '<h2>I am Example</h2>';
  editorOption: any = {
    debug: 'error',
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ],
    },
    placeholder: 'Compose an epic...',
    readOnly: false,
    theme: 'snow',
  };

  titleRules: any = [(v: any) => !!v || 'Title is required'];

  mounted() {
    this.resetValidation();
    this.initData();
    this.initLocalStorage();
  }

  initLocalStorage() {
    if (!localStorage.getItem('program-item')) {
      localStorage.setItem('program-data', JSON.stringify(this.program));
    }
  }

  dataChange(payload: any) {
    const localData: any = localStorage.getItem('program-data');
    const localDataParsed: any = JSON.parse(localData);
    Object.keys(localDataParsed).map((key, index) => {
      if (key === payload.target.dataset.text) {
        localDataParsed[key] = payload.target.value;
      }
    });
    localStorage.setItem('program-data', JSON.stringify(localDataParsed));
  }

  initData() {
    this.program = { ...initProgramData };
  }

  resetValidation() {
    this.$refs.form.resetValidation();
  }

  closeDialog() {
    this.$emit('closeModal', this.program);
  }

  get isLoadingUploadFile() {
    return FileModule.isLoadingUploadFile;
  }

  get uploadPrecentage() {
    return FileModule.uploadPrecentage;
  }

  get tempFile() {
    return FileModule.tempFile;
  }

  async validateImage() {
    if (this.program.preview_image_url) {
      // update data image
      const formData = new FormData();
      formData.append('file', this.fileContainer);
      formData.append('prefix', 'program-thumbnail');
      formData.append('location', 'channel');
      await FileModule.updateFile({
        formData,
        filename: convertImageUrl(this.tempFile.filename),
      });
    } else {
      const formData = new FormData();
      formData.append('file', this.fileContainer);
      formData.append('prefix', 'program-thumbnail');
      formData.append('location', 'channel');
      await FileModule.uploadFile(formData);
    }
  }

  @Watch('tempFile')
  watchTempFile() {
    if (this.tempFile.filename !== '') {
      this.program.preview_image_url = `${
        process.env.VUE_APP_API_FILE_SERVICE_URL
      }file/${convertImageUrl(this.tempFile.filename)}`;
    }
  }

  onVideoTeaserBlur() {
    const preview = checkVideoIdYoutube(this.program.preview_video_url);
    if (!preview.error) {
      this.videoPreviewId = preview.videoId;
      setTimeout(() => {
        this.videoPreviewValid = true;
      }, 300);
      this.videoPreviewValid = false;
    } else {
      this.videoPreviewValid = false;
      this.videoPreviewId = '';
      this.$refs.form.inputs[1].errorBucket.push(preview.message);
    }
  }

  onEditorBlur(quill: any) {
    console.log('editor blur!', quill);
  }
  onEditorFocus(quill: any) {
    console.log('editor focus!', quill);
  }
}
