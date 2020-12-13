import styled, { css } from 'styled-components';

const GLOBALS = css`
    html {
        height: 100%;
    }
    html,
    body,
    main,
    .fullheight,
    html body div {
        min-height: 100% !important;
        height: 100vh;
    }
    body {
        font: 13px/1.231 arial, helvetica, clean, sans-serif;
        min-height: 100%;
        line-height: 1.4;
    }

    select,
    input,
    button,
    textarea,
    button {
        font: 99% arial, helvetica, clean, sans-serif;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    pre,
    code,
    kbd,
    samp,
    tt {
        font-family: monospace;
        *font-size: 108%;
        line-height: 100%;
    }

    h1 {
        font-size: 138.5%;
    }

    h2 {
        font-size: 123.1%;
    }

    h3 {
        font-size: 108%;
    }

    body,
    p,
    dl,
    dt,
    dd,
    ul,
    ol,
    li,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    pre,
    code,
    form,
    fieldset,
    legend,
    input,
    button,
    textarea,
    blockquote,
    th,
    td {
        margin: 0;
        padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    ul,
    ol,
    dl {
        margin: 1em 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong,
    th,
    dt,
    b {
        font-weight: bold;
    }

    abbr,
    acronym {
        border-bottom: 1px dotted #000;
        cursor: help;
    }

    em,
    blockquote,
    q,
    em,
    cite,
    dfn,
    i,
    cite,
    var,
    address {
        font-style: italic;
    }

    ol,
    ul,
    dl {
        margin-left: 2em;
    }

    ol li {
        list-style: decimal outside;
    }

    ul li {
        list-style: disc outside;
    }

    dl dd {
        margin-left: 1em;
    }

    th,
    td {
        border: 1px solid #000;
        padding: 0.5em;
    }

    th {
        text-align: center;
    }

    tbody th {
        text-align: left;
    }

    caption {
        position: absolute;
        left: -999em;
    }

    fieldset,
    img {
        border: 0;
    }

    img {
        vertical-align: top;
    }

    legend {
        color: #000;
        padding-bottom: 0.5em;
    }

    code {
        color: #06f;
    }

    code,
    pre {
        font-family: 'Courier New', monospace, serif;
        font-size: 1em;
    }

    blockquote p:before,
    blockquote p:after,
    q:before,
    q:after {
        content: '';
    }

    ins {
        text-decoration: none;
        border-bottom: 3px double #333;
    }

    del {
        text-decoration: line-through;
    }

    abbr,
    acronym {
        border-bottom: 1px dotted #333;
        font-variant: normal;
    }

    hr {
        margin-right: 30px;
        margin-left: 30px;
        border-style: inset;
        border-width: 1px;
    }

    fieldset {
        line-height: 1;
    }

    input[type='checkbox'] {
        vertical-align: middle;
        *vertical-align: middle;
    }

    input[type='radio'] {
        input {
            _vertical-align: middle;
        }

        input,
        button,
        textarea,
        select,
        optgroup,
        option {
            font-size: 100%;
        }

        button,
        input [type='submit'],
        input [type='reset'],
        input [type='button'],
        .inputButton {
            *overflow: visible;
            _width: 0;
            padding: 0.2em 0.4em;
        }
    }

    a:link,
    a:visited {
        color: #d2d2d2 !important;
    }

    a:focus,
    :focus {
        outline: 1px dotted #000;
    }

    a:active,
    input:active,
    select:active,
    textarea:active {
        outline: none;
    }

    .grouped:after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: ' ';
        clear: both;
        height: 0;
    }

    .grouped {
        display: inline-block;
    }

    * html .grouped {
        height: 1%;
    }

    .grouped {
        display: block;
    }

    .notice,
    .alert {
        margin-top: 0px;
        padding: 5px;
    }

    .notice {
        border: solid 1px #99cc99;
        background-color: #e2f9e3;
        color: #006600;
    }

    .alert {
        border: 1px solid #cc0000;
        background-color: #eeaaaa;
        color: #cc0000;
    }

    label {
        width: 120px;
        display: inline-block;
    }

    abbr {
        cursor: default;
        border: none;
    }

    input,
    textarea {
        font-size: 110%;
    }

    select {
        font-size: 120%;
    }

    input[type='text']:focus,
    input[type='password']:focus,
    input[type='file']:focus,
    input[type='email']:focus,
    textarea:focus,
    select:focus {
        border: 2px solid #2c2c2c;
    }

    input[type='text'],
    input[type='password'],
    input[type='file'],
    input[type='email'],
    textarea,
    select {
        width: 300px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        border: 2px solid #d2d1cf;
        color: #555555;
        outline: 0 none;
        padding: 5px;
    }

    form .input label {
        vertical-align: middle;
    }

    form .input.text label {
        vertical-align: top;
    }

    .field_with_errors input[type='text'],
    .field_with_errors input[type='password'],
    .field_with_errors input[type='file'],
    .field_with_errors textarea,
    .field_with_errors select {
        border: 2px solid #e0a7a7;
    }

    .field_with_errors input[type='text']:focus,
    .field_with_errors input[type='password']:focus,
    .field_with_errors input[type='file']:focus,
    .field_with_errors textarea:focus {
        border: 2px solid #b22222;
    }

    .field_with_errors .error {
        padding-left: 10px;
    }
`;

export const StyledApplicationContainer = styled.div`
    ${GLOBALS};
    max-width: 1200px;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.88);
    min-height: 100vh;
`;

export const StyledRoundedButton = css`
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 1);
`;
export const AccessibleInteraction = css`
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const ButtonAnimationTiming = '.28s';
export const ButtonAnimationUnderlineFromCenter = css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
    &:before {
        content: '';
        position: absolute;
        z-index: -1;
        left: 51%;
        right: 51%;
        bottom: 0;
        background: #2098d1;
        height: 4px;
        -webkit-transition-property: left, right;
        transition-property: left, right;
        -webkit-transition-duration: ${ButtonAnimationTiming};
        transition-duration: ${ButtonAnimationTiming};
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
    &:hover:before {
        left: 0;
        right: 0;
    }
`;
export const LinkAsButton = css`
    ${ButtonAnimationUnderlineFromCenter};
    ${AccessibleInteraction};
    height: 100%;
    display: flex;
    align-items: center;
`;
