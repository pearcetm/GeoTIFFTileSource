import { i as r } from "./pako.esm-CB1uQYY0.js";
import { B as a } from "./basedecoder-DHcBySSe.js";
class s extends a {
  decodeBlock(e) {
    return r(new Uint8Array(e)).buffer;
  }
}
export {
  s as default
};
//# sourceMappingURL=deflate-BXt-9JA_.js.map
