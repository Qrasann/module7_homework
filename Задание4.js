//Задание4
function ElectricalAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.isPlugged = false;
} 

ElectricalAppliance.prototype.plugIn = function() {
  console.log(this.name + " is plugged!");
  this.isPlugged = true;
}

ElectricalAppliance.prototype.getPowerUsed = function() {
  return this.isPlugged ? this.power : 0;
}


const lamp = new ElectricalAppliance('lamp', 49);
const pc = new ElectricalAppliance('pc', 846);
const tv = new ElectricalAppliance('tv', 333);

console.log(lamp.getPowerUsed() + pc.getPowerUsed() + tv.getPowerUsed());

lamp.plugIn();
console.log(lamp.getPowerUsed() + pc.getPowerUsed() + tv.getPowerUsed());

pc.plugIn();
console.log(lamp.getPowerUsed() + pc.getPowerUsed() + tv.getPowerUsed());

tv.plugIn();
console.log(lamp.getPowerUsed() + pc.getPowerUsed() + tv.getPowerUsed());