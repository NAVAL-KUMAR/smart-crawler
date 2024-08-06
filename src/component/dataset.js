const operationsType = [
  { name: "CSS SELECTOR", code: "CSS_SELECTOR" },
  { name: "CSS SELECTOR ALL", code: "CSS_SELECTOR_ALL" },
  { name: "EXTRACT TEXT", code: "EXTRACT_TEXT" },
  { name: "EXTRACT ATTRIBUTE", code: "EXTRACT_ATTRIBUTE" },
  { name: "SELECT_NTH_CHILD", code: "SELECT_NTH_CHILD" },
  { name: "APPEND TO LIST", code: "APPEND_TO_LIST" },
  { name: "INTERATE", code: "INTERATE" },
  { name: "REGEX", code: "REGEX" },
  { name: "STRING OPERATIONS", code: "STRING_OPERATIONS" },
];

const sourcesList = ["URL" ,"DOM", "CONSTANT",
   "VALUE",
   "FUNCTION",
];

const mappingList = [
  { name: "TITLE", code: "Title" },
  { name: "DESCRIPTION", code: "Description" },
  { name: "SIZE_VARIANT", code: "Size Variant" },
  { name: "BREADCRUMB", code: "Breadcrumb" },
  { name: "PRIMARY_IMAGE", code: "Primary Image" },
  { name: "DOMAIN_ID", code: "Domain Id" },
  { name: "URL_NAME", code: "Url Name" },
  { name: "PRODUCT_URL", code: "Product Url" },
  { name: "PRODUCT_ID", code: "Product Id" },
  { name: "DERIVED_PRODUCT_ID", code: "Derived Product Id" },
  { name: "SKU_ID", code: "Sku Id" },
  { name: "DERIVED_SKU_ID", code: "Derived Sku Id" }
];

const colors = [
  "#921A40",
  "#36BA98",
  "#C75B7A",
  "#9B86BD",
  "#D9ABAB",
  "#E4003A",
  "#F4D9D0",
  "#921A40",
  "#36BA98",
  "#C75B7A",
  "#9B86BD",
  "#D9ABAB",
  "#E4003A",
  "#F4D9D0",
  "#921A40",
  "#36BA98",
  "#C75B7A",
  "#9B86BD",
  "#D9ABAB",
  "#E4003A",
  "#F4D9D0",
];
const returnType = ["String", "List", "Number"];

const dataTypeList = ["VOID", "CATALOG", "STRING", "NONE", "LIST"];
export {
  sourcesList,
  operationsType,
  colors,
  returnType,
  dataTypeList,
  mappingList,
};
