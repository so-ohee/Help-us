import { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import PropTypes from 'prop-types'

import '@toast-ui/editor/dist/toastui-editor.css'
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';

import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

const WrappedEditor = (props) => {
  const { forwardedRef } = props;

  return (
    <Editor
      {...props}
      initialValue='hi!'
      previewStyle='vertical'
      height='600px'
      initialEditType="wysiwyg"
      useCommandShortcut={true}
      ref={forwardedRef}
      plugins={[colorSyntax, codeSyntaxHighlight]}
    />
  )
}

WrappedEditor.propTypes = {
  props: PropTypes.object,
  forwardedRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  }).isRequired
}

export default WrappedEditor;