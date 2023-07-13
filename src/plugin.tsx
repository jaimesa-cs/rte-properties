import ContentstackSDK from "@contentstack/app-sdk";
import Extension from "@contentstack/app-sdk/dist/src/extension";
import { customTitle } from "./custom-title";
// import { getLayoutOptions } from "./LayoutOptions";

export default ContentstackSDK.init().then(async (sdk: Extension) => {
  const extensionObj = await sdk["location"];
  const RTE = await extensionObj["RTEPlugin"];
  if (!RTE) return;

//   console.log(RTE)

  // const Rate = createRateRTE(RTE)
  // const RemoveHeadingMargin = removeHeadingMargin(RTE);
  // const CustomProps = getLayoutOptions(RTE);
  const CustomTitle = customTitle(RTE);


  return {
    // CustomProps,
    CustomTitle,
    
  };
});