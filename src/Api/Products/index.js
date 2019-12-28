import axios from "axios";
import { Products } from "../../DummyData/data";
export default {
  getProducts: () => {
    return new Promise((success, reject) => {
      setTimeout(() => {
        success(Products);
      }, 0);
    });
  }
};
