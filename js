import { LightningElement} from 'lwc';
export default class CheckBoxClassDet extends LightningElement
{
    
 selectDeselectAll(event) {
        if (event.target.checked)
  {
    console.log('Check box is checked');
  }
  else
  {
    console.log('check box is unchecked');
  }
}
