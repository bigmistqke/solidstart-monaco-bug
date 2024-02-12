// @refresh reload
import loader, { Monaco } from '@monaco-editor/loader';
import { createEffect, createResource } from "solid-js";

import "./app.css";

const [monaco] = createResource(() => {
  try {
    return loader.init() as Promise<Monaco>
  } catch (error) {
    console.error('error', error)
    return undefined
  }
})

export default () => {
  let container: HTMLDivElement

  createEffect(() => {
    const _monaco = monaco()
    if(!_monaco) return
    _monaco.editor.create(container, {
      value: 'console.log("Hello, world")',
      language: 'javascript',
    })
  })

  return <div ref={container!} />
}
