import React from 'react'
import StringInJS from './StringInJS'
import AsyncInJS from './AsyncInJS'
import JSWorks from './HowJSWorks'
import ExportImportModules from './ExportImportModules'
import JSDOM from './JSDOM'
import ObjectsInJS from './ObjectsInJS'

export default function JsBasicsToAdvanced() {
  return (
    <div className='container'>
      <h1 className='text-center mb-8'>JS Basics To Advanced </h1>
      <JSWorks />
      <JSDOM />
      <AsyncInJS />
      <StringInJS />
      <ExportImportModules />
      <ObjectsInJS />
    </div>
  )
}
