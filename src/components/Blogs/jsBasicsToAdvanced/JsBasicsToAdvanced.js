import React from 'react'
import StringInJS from './StringInJS'
import AsyncInJS from './AsyncInJS'
import JSWorks from './HowJSWorks'
import ExportImportModules from './ExportImportModules'
import JSDOM from './JSDOM'
import ObjectsInJS from './ObjectsInJS'
import ArrayInJS from './ArrayInJS'
import FunctionInJS from './FunctionInJS'

export default function JsBasicsToAdvanced() {
  return (
    <div className='container'>
      <h1 className='text-center mb-8'>JS Basics To Advanced </h1>
      <JSWorks />
      <JSDOM />
      <FunctionInJS />
      <AsyncInJS />
      <ArrayInJS />
      <ObjectsInJS />
      <StringInJS />
      <ExportImportModules />
    </div>
  )
}
