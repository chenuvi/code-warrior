// https://mp.weixin.qq.com/s/fvaGLHq1iGQtFHDxKad1SA
interface Light {
  currentState(): void;
  offLightState(): void;
}
interface LightState {
  light?(): object;
  clickButton(): void;
}
class OffLightState implements LightState {
  light: any;
  constructor(light) {
    this.light = light;
  }
  clickButton() {
    console.log("Turn on the low light");
    this.light.setState(this.light.lowLightState);
  }
}
class lowLightState implements LightState {
  light: any;
  constructor(light) {
    this.light = light;
  }
  clickButton() {
    console.log("Turn on the strong light");
    this.light.setState(this.light.strongLightState);
  }
}
class strongLightState implements LightState {
  light: any;
  constructor(light) {
    this.light = light;
  }
  clickButton() {
    console.log("Turn off the light");
    this.light.setState(this.light.offLightState);
  }
}

class Light {
  constructor() {
    this.offLightState = new OffLightState(this);
    this.lowLightState = new LowLightState(this);
    this.strongLightState = new StrongLightState(this);
    this.currentState = this.offLightState;
  }
  setState(newState) {
    this.currentState = newState;
  }
  clickButton() {
    this.currentState.clickButton();
  }
}
let light = new Light();

light.clickButton();
light.clickButton();
light.clickButton();
