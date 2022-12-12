//Задание5
class Device {
    constructor (name) {
      this.name = name;
      this.connect = false;
    };
    
    connected() {
        console.log(`${this.name} подключен к электросети`);
        this.connect = true;
    }
    unconnected() {
        console.log(`${this.name} не подключен к электросети`);
        this.connect = false;
    }
  }
    
    class AllDevices extends Device {
      constructor (name, brand, material, power){
        super (name);
        this.brand = brand;
        this.material = material;
        this.connect = false;
        this.power = power
      }
    }
  
  const lamp = new AllDevices ("Лампа", "Xiaomi", "metall/plastic", 49);
  lamp.unconnected()
  console.log(lamp)
  
  const pc = new AllDevices ("Компьютер", "Nvidia", "metall/plastic", 846);
  pc.connected()
  console.log(pc)

  const tv = new AllDevices ("Телевизор", "Samsung", "plastic", 333);
  tv.connected()
  console.log(tv)

  const powerConsumption = lamp.power + pc.power + tv.power
  console.log(`Потребляемая мощность включенных в сеть приборов - ${powerConsumption} Ватт`)