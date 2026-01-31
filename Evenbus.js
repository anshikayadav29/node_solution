const bus = {};
bus.on = (e,f)=>(bus[e]=f);
bus.emit = e=>bus[e]();
