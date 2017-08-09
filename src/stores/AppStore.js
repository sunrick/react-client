import {observable, computed, action, useStrict} from "mobx";

useStrict(true);

const AppStore = observable({
  // initial values
  title: "title",
  description: "description",

  // computed
  channelTitleUpcase: computed(function() {
    return this.title.toUpperCase();
  }),

  channelDescriptionUpcase: computed(function(){
    return this.description.toUpperCase();
  }),

  // actions
  changeTitle: action.bound(function(title){
    this.title = title;
  }),

  changeDescription: action.bound(function(description){
    this.description = description;
  })

});

export default AppStore;
