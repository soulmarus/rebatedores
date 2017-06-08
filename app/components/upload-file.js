import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        upload() {
            alert('upload!!');
        },

        uploadAFile(fileList) {
        let re = new RegExp('text/*');

        if(re.test(fileList[0].type)) {
            alert('1');
            let controller = this.controllerFor('retornocip');
alert('2');
            controller.set('fileName', fileList[0].name);
alert('3');
            let reader = new FileReader();
alert('4');
            reader.onloadend = function() {
              controller.set('fileUrl', reader.result);
            };
alert('5');
            reader.readAsDataURL(fileList[0]);
   alert('6');
          } else {
            alert('Arquivo deve ser texto. Você tentou carregar: ' + fileList[0].type);
          }
        }
    }
});
