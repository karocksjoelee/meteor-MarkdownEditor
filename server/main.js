import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins'


Meteor.startup(() => {
  // code to run on server at 
  // Publication provide data , Subscribtion consume data 
  Meteor.publish('bins', function() {
    return Bins.find( {ownerId: this.userId} );
  });

  Meteor.publish('sharedBins', function() {
    const user = Meteor.users.findOne(this.userId);

    if(!user) {return;}

    const email = user.emails[0].address;

    return Bins.find({
      sharedWith: { $elemMatch: {$eq: email}}
    });

  });

}); // end of Meteor.startup()
