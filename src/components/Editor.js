import React from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

const Editor = ({ language, displayName, value, onChange, displayIcon }) => {
    function handleChange(editor, data, value) {
        onChange(value);
    }

    return (
        <div className="editor-container">
            <div className="editor-title">
                <span class={displayIcon }></span>
                <span className="col-6">{displayName}</span>
            </div>
            <ControlledEditor onBeforeChange={handleChange} value={value} className="code-mirror-wrapper" options={{ lineWrapping: true, lint: true, mode: language, theme: 'material', lineNumbers: true }} />
        </div>
    );
}

export default Editor;