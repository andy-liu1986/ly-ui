import yjTabs  from './tabs'
import icon from './icon'
import form from './form'
const components = {
  ...form,
  ...yjTabs,
  icon
}
const install = (Vue)=>{
  console.log(Vue,'vvvue')
  Object.keys(components).forEach(cpt => {
    Vue.component(components[cpt].name,components[cpt])
  });
}
export default {
  install
}