import Ember from 'ember';

export default Ember.Route.extend({
     actions: {
        uploadAFile(fileList) {
            let controller = this.controllerFor('retornocip');
            controller.set('multiFiles', fileList);
        }
    },
    model() {
        return ['Header','Linha Detalhe','Trailler'];
    }
});
