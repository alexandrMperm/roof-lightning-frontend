import DS from 'ember-data';

export default DS.Model.extend({
  perimeter: DS.attr('number', { defaultValue: 0 } ),
  walls: DS.hasMany('wall')
});
