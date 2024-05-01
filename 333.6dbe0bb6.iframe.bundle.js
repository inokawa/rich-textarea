/*! For license information please see 333.6dbe0bb6.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkrich_textarea=self.webpackChunkrich_textarea||[]).push([[333],{"./node_modules/@tanstack/react-form/dist/esm/useForm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>useForm});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class Store{constructor(initialState,options){this.listeners=new Set,this._batching=!1,this._flushing=0,this.subscribe=listener=>{var _a,_b;this.listeners.add(listener);const unsub=null==(_b=null==(_a=this.options)?void 0:_a.onSubscribe)?void 0:_b.call(_a,listener,this);return()=>{this.listeners.delete(listener),null==unsub||unsub()}},this.setState=updater=>{var _a,_b,_c;const previous=this.state;this.state=(null==(_a=this.options)?void 0:_a.updateFn)?this.options.updateFn(previous)(updater):updater(previous),null==(_c=null==(_b=this.options)?void 0:_b.onUpdate)||_c.call(_b),this._flush()},this._flush=()=>{if(this._batching)return;const flushId=++this._flushing;this.listeners.forEach((listener=>{this._flushing===flushId&&listener()}))},this.batch=cb=>{if(this._batching)return cb();this._batching=!0,cb(),this._batching=!1,this._flush()},this.state=initialState,this.options=options}}function functionalUpdate(updater,input){return"function"==typeof updater?updater(input):updater}function getBy(obj,path){return makePathArray(path).reduce(((current,pathPart)=>{if(void 0!==current)return current[pathPart]}),obj)}function setBy(obj,_path,updater){const path=makePathArray(_path);return function doSet(parent){if(!path.length)return functionalUpdate(updater,parent);const key=path.shift();if("string"==typeof key)return"object"==typeof parent?{...parent,[key]:doSet(parent[key])}:{[key]:doSet()};if(Array.isArray(parent)&&void 0!==key){const prefix=parent.slice(0,key);return[...prefix.length?prefix:new Array(key),doSet(parent[key]),...parent.slice(key+1)]}return[...new Array(key),doSet()]}(obj)}const reFindNumbers0=/^(\d*)$/gm,reFindNumbers1=/\.(\d*)\./gm,reFindNumbers2=/^(\d*)\./gm,reFindNumbers3=/\.(\d*$)/gm,reFindMultiplePeriods=/\.{2,}/gm,intPrefix="__int__",intReplace=`${intPrefix}$1`;function makePathArray(str){if("string"!=typeof str)throw new Error("Path must be a string.");return str.replaceAll("[",".").replaceAll("]","").replace(reFindNumbers0,intReplace).replace(reFindNumbers1,`.${intReplace}.`).replace(reFindNumbers2,`${intReplace}.`).replace(reFindNumbers3,`.${intReplace}`).replace(reFindMultiplePeriods,".").split(".").map((d=>0===d.indexOf(intPrefix)?parseInt(d.substring(intPrefix.length),10):d))}function getAsyncValidatorArray(cause,options){const{asyncDebounceMs}=options,{onChangeAsync,onBlurAsync,onSubmitAsync,onBlurAsyncDebounceMs,onChangeAsyncDebounceMs}=options.validators||{},defaultDebounceMs=asyncDebounceMs??0,changeValidator={cause:"change",validate:onChangeAsync,debounceMs:onChangeAsyncDebounceMs??defaultDebounceMs},blurValidator={cause:"blur",validate:onBlurAsync,debounceMs:onBlurAsyncDebounceMs??defaultDebounceMs},submitValidator={cause:"submit",validate:onSubmitAsync,debounceMs:0},noopValidator=validator=>({...validator,debounceMs:0});switch(cause){case"submit":return[noopValidator(changeValidator),noopValidator(blurValidator),submitValidator];case"blur":return[blurValidator];case"change":return[changeValidator];default:return[]}}function getSyncValidatorArray(cause,options){const{onChange,onBlur,onSubmit}=options.validators||{},changeValidator={cause:"change",validate:onChange},blurValidator={cause:"blur",validate:onBlur},submitValidator={cause:"submit",validate:onSubmit},serverValidator={cause:"server",validate:()=>{}};switch(cause){case"submit":return[changeValidator,blurValidator,submitValidator,serverValidator];case"server":return[serverValidator];case"blur":return[blurValidator,serverValidator];default:return[changeValidator,serverValidator]}}function getDefaultFormState(defaultState){return{values:defaultState.values??{},errors:defaultState.errors??[],errorMap:defaultState.errorMap??{},fieldMeta:defaultState.fieldMeta??{},canSubmit:defaultState.canSubmit??!0,isFieldsValid:defaultState.isFieldsValid??!1,isFieldsValidating:defaultState.isFieldsValidating??!1,isFormValid:defaultState.isFormValid??!1,isFormValidating:defaultState.isFormValidating??!1,isSubmitted:defaultState.isSubmitted??!1,isSubmitting:defaultState.isSubmitting??!1,isTouched:defaultState.isTouched??!1,isPristine:defaultState.isPristine??!0,isDirty:defaultState.isDirty??!1,isValid:defaultState.isValid??!1,isValidating:defaultState.isValidating??!1,submissionAttempts:defaultState.submissionAttempts??0,validationMetaMap:defaultState.validationMetaMap??{onChange:void 0,onBlur:void 0,onSubmit:void 0,onMount:void 0,onServer:void 0}}}class FormApi{constructor(opts){var _a;this.options={},this.fieldInfo={},this.prevTransformArray=[],this.mount=()=>{const{onMount}=this.options.validators||{};if(!onMount)return;const error=this.runValidator({validate:onMount,value:{value:this.state.values,formApi:this},type:"validate"});error&&this.store.setState((prev=>({...prev,errorMap:{...prev.errorMap,onMount:error}})))},this.update=options=>{if(!options)return;const oldOptions=this.options;this.options=options,this.store.batch((()=>{const shouldUpdateValues=options.defaultValues&&options.defaultValues!==oldOptions.defaultValues&&!this.state.isTouched,shouldUpdateState=options.defaultState!==oldOptions.defaultState&&!this.state.isTouched;this.store.setState((()=>getDefaultFormState(Object.assign({},this.state,shouldUpdateState?options.defaultState:{},shouldUpdateValues?{values:options.defaultValues}:{}))))}))},this.reset=()=>{const{fieldMeta:currentFieldMeta}=this.state,fieldMeta=this.resetFieldMeta(currentFieldMeta);this.store.setState((()=>{var _a2;return getDefaultFormState({...this.options.defaultState,values:this.options.defaultValues??(null==(_a2=this.options.defaultState)?void 0:_a2.values),fieldMeta})}))},this.validateAllFields=async cause=>{const fieldValidationPromises=[];this.store.batch((()=>{Object.values(this.fieldInfo).forEach((field=>{if(!field.instance)return;const fieldInstance=field.instance;fieldValidationPromises.push(Promise.resolve().then((()=>fieldInstance.validate(cause)))),field.instance.state.meta.isTouched||field.instance.setMeta((prev=>({...prev,isTouched:!0})))}))}));return(await Promise.all(fieldValidationPromises)).flat()},this.validateSync=cause=>{const validates=getSyncValidatorArray(cause,this.options);let hasErrored=!1;this.store.batch((()=>{for(const validateObj of validates){if(!validateObj.validate)continue;const error=normalizeError(this.runValidator({validate:validateObj.validate,value:{value:this.state.values,formApi:this},type:"validate"})),errorMapKey=getErrorMapKey(validateObj.cause);this.state.errorMap[errorMapKey]!==error&&this.store.setState((prev=>({...prev,errorMap:{...prev.errorMap,[errorMapKey]:error}}))),error&&(hasErrored=!0)}}));const submitErrKey=getErrorMapKey("submit");return this.state.errorMap[submitErrKey]&&"submit"!==cause&&!hasErrored&&this.store.setState((prev=>({...prev,errorMap:{...prev.errorMap,[submitErrKey]:void 0}}))),{hasErrored}},this.validateAsync=async cause=>{const validates=getAsyncValidatorArray(cause,this.options);this.state.isFormValidating||this.store.setState((prev=>({...prev,isFormValidating:!0})));const promises=[];for(const validateObj of validates){if(!validateObj.validate)continue;const key=getErrorMapKey(validateObj.cause),fieldValidatorMeta=this.state.validationMetaMap[key];null==fieldValidatorMeta||fieldValidatorMeta.lastAbortController.abort();const controller=new AbortController;this.state.validationMetaMap[key]={lastAbortController:controller},promises.push(new Promise((async resolve=>{let rawError;try{rawError=await new Promise(((rawResolve,rawReject)=>{setTimeout((async()=>{if(controller.signal.aborted)return rawResolve(void 0);try{rawResolve(await this.runValidator({validate:validateObj.validate,value:{value:this.state.values,formApi:this,signal:controller.signal},type:"validateAsync"}))}catch(e){rawReject(e)}}),validateObj.debounceMs)}))}catch(e){rawError=e}const error=normalizeError(rawError);this.store.setState((prev=>({...prev,errorMap:{...prev.errorMap,[getErrorMapKey(cause)]:error}}))),resolve(error)})))}let results=[];return promises.length&&(results=await Promise.all(promises)),this.store.setState((prev=>({...prev,isFormValidating:!1}))),results.filter(Boolean)},this.validate=cause=>{const{hasErrored}=this.validateSync(cause);return hasErrored&&!this.options.asyncAlways?this.state.errors:this.validateAsync(cause)},this.handleSubmit=async()=>{var _a2,_b,_c,_d,_e,_f;if(this.store.setState((old=>({...old,isSubmitted:!1,submissionAttempts:old.submissionAttempts+1}))),!this.state.canSubmit)return;this.store.setState((d=>({...d,isSubmitting:!0})));const done=()=>{this.store.setState((prev=>({...prev,isSubmitting:!1})))};if(await this.validateAllFields("submit"),!this.state.isFieldsValid)return done(),void(null==(_b=(_a2=this.options).onSubmitInvalid)||_b.call(_a2,{value:this.state.values,formApi:this}));if(await this.validate("submit"),!this.state.isValid)return done(),void(null==(_d=(_c=this.options).onSubmitInvalid)||_d.call(_c,{value:this.state.values,formApi:this}));try{await(null==(_f=(_e=this.options).onSubmit)?void 0:_f.call(_e,{value:this.state.values,formApi:this})),this.store.batch((()=>{this.store.setState((prev=>({...prev,isSubmitted:!0}))),done()}))}catch(err){throw done(),err}},this.getFieldValue=field=>getBy(this.state.values,field),this.getFieldMeta=field=>this.state.fieldMeta[field],this.getFieldInfo=field=>{var _a2;return(_a2=this.fieldInfo)[field]||(_a2[field]={instance:null,validationMetaMap:{onChange:void 0,onBlur:void 0,onSubmit:void 0,onMount:void 0,onServer:void 0}})},this.setFieldMeta=(field,updater)=>{this.store.setState((prev=>({...prev,fieldMeta:{...prev.fieldMeta,[field]:functionalUpdate(updater,prev.fieldMeta[field])}})))},this.resetFieldMeta=fieldMeta=>Object.keys(fieldMeta).reduce(((acc,key)=>(acc[key]={isValidating:!1,isTouched:!1,isDirty:!1,isPristine:!0,touchedErrors:[],errors:[],errorMap:{}},acc)),{}),this.setFieldValue=(field,updater,opts2)=>{const touch=null==opts2?void 0:opts2.touch;this.store.batch((()=>{touch&&this.setFieldMeta(field,(prev=>({...prev,isTouched:!0,isDirty:!0}))),this.store.setState((prev=>({...prev,values:setBy(prev.values,field,updater)})))}))},this.deleteField=field=>{this.store.setState((prev=>{const newState={...prev};return newState.values=function deleteBy(obj,_path){const path=makePathArray(_path);return function doDelete(parent){if(!parent)return;if(1===path.length){const finalPath=path[0];if(Array.isArray(parent)&&"number"==typeof finalPath)return parent.filter(((_,i)=>i!==finalPath));const{[finalPath]:remove,...rest}=parent;return rest}const key=path.shift();if("string"==typeof key&&"object"==typeof parent)return{...parent,[key]:doDelete(parent[key])};if("number"==typeof key&&Array.isArray(parent)){if(key>=parent.length)return parent;const prefix=parent.slice(0,key);return[...prefix.length?prefix:new Array(key),doDelete(parent[key]),...parent.slice(key+1)]}throw new Error("It seems we have created an infinite loop in deleteBy. ")}(obj)}(newState.values,field),delete newState.fieldMeta[field],newState})),delete this.fieldInfo[field]},this.pushFieldValue=(field,value,opts2)=>this.setFieldValue(field,(prev=>[...Array.isArray(prev)?prev:[],value]),opts2),this.insertFieldValue=(field,index,value,opts2)=>{this.setFieldValue(field,(prev=>prev.map(((d,i)=>i===index?value:d))),opts2)},this.removeFieldValue=(field,index,opts2)=>{this.setFieldValue(field,(prev=>prev.filter(((_d,i)=>i!==index))),opts2)},this.swapFieldValues=(field,index1,index2)=>{this.setFieldValue(field,(prev=>{const prev1=prev[index1],prev2=prev[index2];return setBy(setBy(prev,`${index1}`,prev2),`${index2}`,prev1)}))},this.moveFieldValues=(field,index1,index2)=>{this.setFieldValue(field,(prev=>(prev.splice(index2,0,prev.splice(index1,1)[0]),prev)))},this.store=new Store(getDefaultFormState({...null==opts?void 0:opts.defaultState,values:(null==opts?void 0:opts.defaultValues)??(null==(_a=null==opts?void 0:opts.defaultState)?void 0:_a.values),isFormValid:!0}),{onUpdate:()=>{var _a2,_b;let{state}=this.store;const fieldMetaValues=Object.values(state.fieldMeta),isFieldsValidating=fieldMetaValues.some((field=>null==field?void 0:field.isValidating)),isFieldsValid=!fieldMetaValues.some((field=>(null==field?void 0:field.errorMap)&&function isNonEmptyArray(obj){return!(Array.isArray(obj)&&0===obj.length)}(Object.values(field.errorMap).filter(Boolean)))),isTouched=fieldMetaValues.some((field=>null==field?void 0:field.isTouched)),isDirty=fieldMetaValues.some((field=>null==field?void 0:field.isDirty)),isPristine=!isDirty,isValidating=isFieldsValidating||state.isFormValidating;state.errors=Object.values(state.errorMap).filter((val=>void 0!==val));const isFormValid=0===state.errors.length,isValid=isFieldsValid&&isFormValid,canSubmit=0===state.submissionAttempts&&!isTouched||!isValidating&&!state.isSubmitting&&isValid;state={...state,isFieldsValidating,isFieldsValid,isFormValid,isValid,canSubmit,isTouched,isPristine,isDirty},this.state=state,this.store.state=this.state;const transformArray=(null==(_a2=this.options.transform)?void 0:_a2.deps)??[];(transformArray.length!==this.prevTransformArray.length||transformArray.some(((val,i)=>val!==this.prevTransformArray[i])))&&(null==(_b=this.options.transform)||_b.fn(this),this.store.state=this.state,this.prevTransformArray=transformArray)}}),this.state=this.store.state,this.update(opts||{})}runValidator(props){const adapter=this.options.validatorAdapter;return adapter&&"function"!=typeof props.validate?adapter()[props.type](props.value,props.validate):props.validate(props.value)}}function normalizeError(rawError){if(rawError)return"string"!=typeof rawError?"Invalid Form Values":rawError}function getErrorMapKey(cause){switch(cause){case"submit":return"onSubmit";case"blur":return"onBlur";case"mount":return"onMount";case"server":return"onServer";default:return"onChange"}}var with_selector=__webpack_require__("./node_modules/use-sync-external-store/shim/with-selector.js");function useStore(store,selector=(d=>d)){return(0,with_selector.useSyncExternalStoreWithSelector)(store.subscribe,(()=>store.state),(()=>store.state),selector,shallow)}function shallow(objA,objB){if(Object.is(objA,objB))return!0;if("object"!=typeof objA||null===objA||"object"!=typeof objB||null===objB)return!1;const keysA=Object.keys(objA);if(keysA.length!==Object.keys(objB).length)return!1;for(let i=0;i<keysA.length;i++)if(!Object.prototype.hasOwnProperty.call(objB,keysA[i])||!Object.is(objA[keysA[i]],objB[keysA[i]]))return!1;return!0}var rehackt=__webpack_require__("./node_modules/rehackt/index.js");class FieldApi{constructor(opts){this.options={},this.mount=()=>{this.getInfo().instance=this;const unsubscribe=this.form.store.subscribe((()=>{this.store.batch((()=>{const nextValue=this.getValue(),nextMeta=this.getMeta();nextValue!==this.state.value&&this.store.setState((prev=>({...prev,value:nextValue}))),nextMeta!==this.state.meta&&this.store.setState((prev=>({...prev,meta:nextMeta})))}))}));this.update(this.options);const{onMount}=this.options.validators||{};if(onMount){const error=this.runValidator({validate:onMount,value:{value:this.state.value,fieldApi:this},type:"validate"});error&&this.setMeta((prev=>({...prev,errorMap:{...null==prev?void 0:prev.errorMap,onMount:error}})))}return()=>{const preserveValue=this.options.preserveValue;unsubscribe(),preserveValue||this.form.deleteField(this.name)}},this.update=opts2=>{if(void 0===this.state.value){const formDefault=getBy(opts2.form.options.defaultValues,opts2.name);void 0!==opts2.defaultValue?this.setValue(opts2.defaultValue):void 0!==formDefault&&this.setValue(formDefault)}void 0===this._getMeta()&&this.setMeta(this.state.meta),this.options=opts2},this.getValue=()=>this.form.getFieldValue(this.name),this.setValue=(updater,options)=>{this.form.setFieldValue(this.name,updater,options),this.validate("change")},this._getMeta=()=>this.form.getFieldMeta(this.name),this.getMeta=()=>this._getMeta()??{isValidating:!1,isTouched:!1,isDirty:!1,isPristine:!0,touchedErrors:[],errors:[],errorMap:{},...this.options.defaultMeta},this.setMeta=updater=>this.form.setFieldMeta(this.name,updater),this.getInfo=()=>this.form.getFieldInfo(this.name),this.pushValue=value=>this.form.pushFieldValue(this.name,value),this.insertValue=(index,value)=>this.form.insertFieldValue(this.name,index,value),this.removeValue=index=>this.form.removeFieldValue(this.name,index),this.swapValues=(aIndex,bIndex)=>this.form.swapFieldValues(this.name,aIndex,bIndex),this.getLinkedFields=cause=>{const fields=Object.values(this.form.fieldInfo),linkedFields=[];for(const field of fields){if(!field.instance)continue;const{onChangeListenTo,onBlurListenTo}=field.instance.options.validators||{};"change"===cause&&(null==onChangeListenTo?void 0:onChangeListenTo.includes(this.name))&&linkedFields.push(field.instance),"blur"===cause&&(null==onBlurListenTo?void 0:onBlurListenTo.includes(this.name))&&linkedFields.push(field.instance)}return linkedFields},this.moveValue=(aIndex,bIndex)=>this.form.moveFieldValues(this.name,aIndex,bIndex),this.validateSync=cause=>{const validates=getSyncValidatorArray(cause,this.options),linkedFieldValidates=this.getLinkedFields(cause).reduce(((acc,field)=>{const fieldValidates=getSyncValidatorArray(cause,field.options);return fieldValidates.forEach((validate=>{validate.field=field})),acc.concat(fieldValidates)}),[]);let hasErrored=!1;this.form.store.batch((()=>{const validateFieldFn=(field,validateObj)=>{const error=FieldApi_normalizeError(field.runValidator({validate:validateObj.validate,value:{value:field.getValue(),fieldApi:field},type:"validate"})),errorMapKey=FieldApi_getErrorMapKey(validateObj.cause);field.state.meta.errorMap[errorMapKey]!==error&&field.setMeta((prev=>({...prev,errorMap:{...prev.errorMap,[FieldApi_getErrorMapKey(validateObj.cause)]:error}}))),error&&(hasErrored=!0)};for(const validateObj of validates)validateObj.validate&&validateFieldFn(this,validateObj);for(const fieldValitateObj of linkedFieldValidates)fieldValitateObj.validate&&validateFieldFn(fieldValitateObj.field,fieldValitateObj)}));const submitErrKey=FieldApi_getErrorMapKey("submit");return this.state.meta.errorMap[submitErrKey]&&"submit"!==cause&&!hasErrored&&this.setMeta((prev=>({...prev,errorMap:{...prev.errorMap,[submitErrKey]:void 0}}))),{hasErrored}},this.validateAsync=async cause=>{const validates=getAsyncValidatorArray(cause,this.options),linkedFields=this.getLinkedFields(cause),linkedFieldValidates=linkedFields.reduce(((acc,field)=>{const fieldValidates=getAsyncValidatorArray(cause,field.options);return fieldValidates.forEach((validate=>{validate.field=field})),acc.concat(fieldValidates)}),[]);this.state.meta.isValidating||this.setMeta((prev=>({...prev,isValidating:!0})));for(const linkedField of linkedFields)linkedField.setMeta((prev=>({...prev,isValidating:!0})));const validatesPromises=[],linkedPromises=[],validateFieldAsyncFn=(field,validateObj,promises)=>{const key=FieldApi_getErrorMapKey(validateObj.cause),fieldValidatorMeta=field.getInfo().validationMetaMap[key];null==fieldValidatorMeta||fieldValidatorMeta.lastAbortController.abort();const controller=new AbortController;this.getInfo().validationMetaMap[key]={lastAbortController:controller},promises.push(new Promise((async resolve=>{let rawError;try{rawError=await new Promise(((rawResolve,rawReject)=>{setTimeout((async()=>{if(controller.signal.aborted)return rawResolve(void 0);try{rawResolve(await this.runValidator({validate:validateObj.validate,value:{value:field.getValue(),fieldApi:field,signal:controller.signal},type:"validateAsync"}))}catch(e){rawReject(e)}}),validateObj.debounceMs)}))}catch(e){rawError=e}const error=FieldApi_normalizeError(rawError);field.setMeta((prev=>({...prev,errorMap:{...null==prev?void 0:prev.errorMap,[FieldApi_getErrorMapKey(cause)]:error}}))),resolve(error)})))};for(const validateObj of validates)validateObj.validate&&validateFieldAsyncFn(this,validateObj,validatesPromises);for(const fieldValitateObj of linkedFieldValidates)fieldValitateObj.validate&&validateFieldAsyncFn(fieldValitateObj.field,fieldValitateObj,linkedPromises);let results=[];(validatesPromises.length||linkedPromises.length)&&(results=await Promise.all(validatesPromises),await Promise.all(linkedPromises)),this.setMeta((prev=>({...prev,isValidating:!1})));for(const linkedField of linkedFields)linkedField.setMeta((prev=>({...prev,isValidating:!1})));return results.filter(Boolean)},this.validate=cause=>{if(!this.state.meta.isTouched)return[];try{this.form.validate(cause)}catch(_){}const{hasErrored}=this.validateSync(cause);return hasErrored&&!this.options.asyncAlways?this.state.meta.errors:this.validateAsync(cause)},this.handleChange=updater=>{this.setValue(updater,{touch:!0})},this.handleBlur=()=>{this.state.meta.isTouched||(this.setMeta((prev=>({...prev,isTouched:!0}))),this.validate("change")),this.validate("blur")},this.form=opts.form,this.name=opts.name,void 0!==opts.defaultValue&&this.form.setFieldValue(this.name,opts.defaultValue),this.store=new Store({value:this.getValue(),meta:this._getMeta()??{isValidating:!1,isTouched:!1,isDirty:!1,isPristine:!0,touchedErrors:[],errors:[],errorMap:{},...opts.defaultMeta}},{onUpdate:()=>{const state=this.store.state;state.meta.errors=Object.values(state.meta.errorMap).filter((val=>void 0!==val)),state.meta.touchedErrors=state.meta.isTouched?state.meta.errors:[],state.meta.isPristine=!state.meta.isDirty,this.prevState=state,this.state=state}}),this.state=this.store.state,this.prevState=this.state,this.options=opts}runValidator(props){const adapters=[this.form.options.validatorAdapter,this.options.validatorAdapter];for(const adapter of adapters)if(adapter&&"function"!=typeof props.validate)return adapter()[props.type](props.value,props.validate);return props.validate(props.value)}}function FieldApi_normalizeError(rawError){if(rawError)return"string"!=typeof rawError?"Invalid Form Values":rawError}function FieldApi_getErrorMapKey(cause){switch(cause){case"submit":return"onSubmit";case"blur":return"onBlur";case"mount":return"onMount";case"server":return"onServer";default:return"onChange"}}const useIsomorphicLayoutEffect="undefined"!=typeof window?rehackt.useLayoutEffect:rehackt.useEffect;function useField(opts){const[fieldApi]=(0,rehackt.useState)((()=>{const api=new FieldApi({...opts,form:opts.form,name:opts.name});return api.Field=Field,api}));return useIsomorphicLayoutEffect(fieldApi.mount,[fieldApi]),useIsomorphicLayoutEffect((()=>{fieldApi.update(opts)})),useStore(fieldApi.store,"array"===opts.mode?state=>[state.meta,Object.keys(state.value).length]:void 0),fieldApi}function Field({children,...fieldOptions}){const fieldApi=useField(fieldOptions);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:functionalUpdate(children,fieldApi)})}function useForm(opts){const[formApi]=(0,rehackt.useState)((()=>{const api=new FormApi(opts);return api.Field=function APIField(props){return(0,jsx_runtime.jsx)(Field,{...props,form:api})},api.useField=props=>useField({...props,form:api}),api.useStore=selector=>useStore(api.store,selector),api.Subscribe=props=>functionalUpdate(props.children,useStore(api.store,props.selector)),api}));return useIsomorphicLayoutEffect(formApi.mount,[]),formApi.useStore((state=>state.isSubmitting)),useIsomorphicLayoutEffect((()=>{formApi.update(opts)})),formApi}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/rehackt/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/index.js")},"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var e=__webpack_require__("./node_modules/react/index.js");var k="function"==typeof Object.is?Object.is:function h(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function t(a,b){return b()}:function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];return n((function(){c.value=d,c.getSnapshot=b,r(c)&&g({inst:c})}),[a,d,b]),m((function(){return r(c)&&g({inst:c}),a((function(){r(c)&&g({inst:c})}))}),[a]),p(d),d};exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u},"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var h=__webpack_require__("./node_modules/react/index.js"),n=__webpack_require__("./node_modules/use-sync-external-store/shim/index.js");var q="function"==typeof Object.is?Object.is:function p(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;exports.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;c=v((function(){function a(a){if(!c){if(c=!0,d=a,a=l(a),void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}if(b=k,q(d,a))return b;var e=l(a);return void 0!==g&&g(b,e)?b:(d=a,k=e)}var d,k,c=!1,m=void 0===e?null:e;return[function(){return a(b())},null===m?void 0:function(){return a(m())}]}),[b,e,l,g]);var d=r(a,c[0],c[1]);return u((function(){f.hasValue=!0,f.value=d}),[d]),w(d),d}},"./node_modules/use-sync-external-store/shim/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js")},"./node_modules/use-sync-external-store/shim/with-selector.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js")}}]);