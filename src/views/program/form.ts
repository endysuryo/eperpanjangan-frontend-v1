import { IProgramData } from '@/common/interface/program.interface';
import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { quillEditor } from 'vue-quill-editor';
import inputLabel from '../../components/form/InputLabel.vue';

@Component({
  name: 'FormProgram',
  components: {
    inputLabel,
    quillEditor,
  },
})
export default class FormProgram extends Vue {
  @Prop(Boolean) readonly dialog: boolean | undefined;

  $refs: any = {
    form: HTMLElement,
    quill: HTMLElement,
  };
  program: IProgramData = {
    title: '',
    description: '',
    requirements: '',
    learning_purposes: '',
    course_ids: [],
    channel_id: '',
    is_paid: false,
    is_batch: false,
    is_recommended: false,
    is_class_dependent_by_order: false,
    is_unit_dependent_by_order: false,
    max_duration_access: '',
    tags: [],
    status: '',
  };
  content: string = '<h2>I am Example</h2>';
  editorOption: any = {
    debug: 'error',
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
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
  }

  resetValidation() {
    this.$refs.form.resetValidation();
  }

  closeDialog() {
    this.$emit('closeModal', this.program);
  }

  onEditorBlur(quill: any) {
    console.log('editor blur!', quill);
  }
  onEditorFocus(quill: any) {
    console.log('editor focus!', quill);
  }
}
