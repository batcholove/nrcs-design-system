import React from "react";

export default {
  title: "Design System|Typography"
};

export const Typography = () => (
  <div>
    <h1>Typography</h1>

    <h1>h1. heading</h1>
    <h2>h2. heading</h2>
    <h3>h3. heading</h3>
    <h4>h4. heading</h4>
    <h5>h5. heading</h5>
    <h6>h6. heading</h6>

    <p>
      You can use the mark tag to <mark>highlight</mark> text.
    </p>
    <p>
      <del>This line of text is meant to be treated as deleted text.</del>
    </p>
    <p>
      <s>This line of text is meant to be treated as no longer accurate.</s>
    </p>
    <p>
      <ins>
        This line of text is meant to be treated as an addition to the document.
      </ins>
    </p>
    <p>
      <u>This line of text will render as underlined</u>
    </p>
    <p>
      <small>This line of text is meant to be treated as fine print.</small>
    </p>
    <p>
      <strong>This line rendered as bold text.</strong>
    </p>
    <p>
      <em>This line rendered as italicized text.</em>
    </p>
  </div>
);
