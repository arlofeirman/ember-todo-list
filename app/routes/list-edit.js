import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateList(list){
      list.save()
      this.transitionTo('lists');
    }
  }
});
