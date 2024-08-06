import React, { useEffect, useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import Variables from "./Variables";
import Functions from "./Functions";
import Mappings from "./Mappings";
// import fetch from 'fetch'

import "./style.css";

const HeroContainer = () => {
  const [variable, setVariables] = useState([]);
  const [mappings, setMappings] = useState([]);
  const [result, setResult] = useState();

  // useEffect(() => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       url: "https://veirdo.in/products/hustle-blue-oversized-tshirt",
  //       returnVariable: "END_RESULT",
  //       variables: [
  //         {
  //           source: "CONSTANT",
  //           name: "DOMAIN_ID",
  //           dataType: "STRING",
  //           value: "veirdo.in",
  //         },
  //         {
  //           source: "CONSTANT",
  //           name: "PRODUCT_PAGE",
  //           dataType: "STRING",
  //           value: "PRODUCT_PAGE",
  //         },
  //         {
  //           source: "CONSTANT",
  //           name: "BRAND",
  //           dataType: "STRING",
  //           value: "BRAND",
  //         },
  //         {
  //           source: "CONSTANT",
  //           name: "GENDER",
  //           dataType: "STRING",
  //           value: "GENDER",
  //         },
  //         {
  //           source: "CONSTANT",
  //           name: "CATEGORY",
  //           dataType: "STRING",
  //           value: "CATEGORY",
  //         },
  //         {
  //           source: "CONSTANT",
  //           name: "COLOR",
  //           dataType: "STRING",
  //           value: "COLOR",
  //         },
  //         {
  //           source: "CONSTANT",
  //           name: "SIZE",
  //           dataType: "STRING",
  //           value: "SIZE",
  //         },
  //         {
  //           source: "DOM",
  //           name: "productId",
  //           dataType: "STRING",
  //           variable: "productId",
  //           operations: [
  //             {
  //               type: "REGEX",
  //               value: '"productId":(\\d+)',
  //             },
  //           ],
  //         },
  //         {
  //           source: "DOM",
  //           name: "title",
  //           dataType: "STRING",
  //           variable: "productId",
  //           operations: [
  //             {
  //               type: "REGEX",
  //               value: "productTitle: `(.*?)`",
  //             },
  //           ],
  //         },
  //         {
  //           source: "DOM",
  //           name: "images",
  //           dataType: "LIST",
  //           operations: [
  //             {
  //               type: "CSS_SELECTOR_ALL",
  //               value: "#product-image-carousel-wrapper .gap-1",
  //             },
  //             {
  //               type: "SELECT_NTH_CHILD",
  //               value: 0,
  //             },
  //             {
  //               type: "CSS_SELECTOR_ALL",
  //               value: "img",
  //             },
  //             {
  //               type: "MODIFY_LIST",
  //               operations: [
  //                 {
  //                   type: "EXTRACT_ATTRIBUTE",
  //                   value: "src",
  //                 },
  //                 {
  //                   type: "STRING_OPERATIONS_REPLACE_ALL",
  //                   variables: [
  //                     {
  //                       source: "CONSTANT",
  //                       value: "//veirdo.in",
  //                     },
  //                     {
  //                       source: "VARIABLE",
  //                       variable: "NONE",
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   type: "STRING_OPERATIONS_CONCATENATE",
  //                   variables: [
  //                     {
  //                       source: "CONSTANT",
  //                       value: "https://veirdo.in/",
  //                     },
  //                     {
  //                       source: "VARIABLE",
  //                       variable: "ITERATOR",
  //                     },
  //                   ],
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           source: "VARIABLE",
  //           name: "primaryImage",
  //           dataType: "STRING",
  //           variable: "images",
  //           operations: [
  //             {
  //               type: "SELECT_NTH_CHILD",
  //               value: 0,
  //             },
  //           ],
  //         },
  //         {
  //           source: "DOM",
  //           name: "breadcrumb",
  //           dataType: "LIST",
  //           operations: [
  //             {
  //               type: "CSS_SELECTOR_ALL",
  //               value: ".breadcrumb",
  //             },
  //             {
  //               type: "SELECT_NTH_CHILD",
  //               value: 0,
  //             },
  //             {
  //               type: "CSS_SELECTOR_ALL",
  //               value: "a",
  //             },
  //             {
  //               type: "MODIFY_LIST",
  //               operations: [
  //                 {
  //                   type: "EXTRACT_TEXT",
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           source: "VARIABLE",
  //           name: "breadcrumbList",
  //           dataType: "LIST",
  //           variable: "breadcrumb",
  //           operations: [
  //             {
  //               type: "APPEND_TO_LIST",
  //               value: "title",
  //             },
  //           ],
  //         },
  //         {
  //           source: "URL",
  //           name: "brand",
  //           dataType: "STRING",
  //           operations: [
  //             {
  //               type: "REGEX",
  //               value: "https://(\\w*).in/",
  //             },
  //           ],
  //         },
  //         {
  //           source: "VARIABLE",
  //           name: "gender",
  //           dataType: "STRING",
  //           variable: "breadcrumb",
  //           operations: [
  //             {
  //               type: "SELECT_NTH_CHILD",
  //               value: 1,
  //             },
  //           ],
  //         },
  //         {
  //           source: "VARIABLE",
  //           name: "category",
  //           dataType: "STRING",
  //           variable: "breadcrumb",
  //           operations: [
  //             {
  //               type: "SELECT_NTH_CHILD",
  //               value: 2,
  //             },
  //           ],
  //         },
  //         {
  //           source: "DOM",
  //           name: "color",
  //           dataType: "STRING",
  //           operations: [
  //             {
  //               type: "CSS_SELECTOR",
  //               value: ".grid-area-form",
  //             },
  //             {
  //               type: "REGEX",
  //               value: "Color - ([A-Za-z\\s]+)",
  //             },
  //           ],
  //         },
  //         {
  //           source: "DOM",
  //           name: "sizeVariantHtml",
  //           dataType: "LIST",
  //           operations: [
  //             {
  //               type: "CSS_SELECTOR_ALL",
  //               value: ".size-variant-parent",
  //             },
  //             {
  //               type: "SELECT_NTH_CHILD",
  //               value: 0,
  //             },
  //             {
  //               type: "CSS_SELECTOR_ALL",
  //               value: "label",
  //             },
  //           ],
  //         },
  //         {
  //           source: "VARIABLE",
  //           name: "sizeVariant",
  //           dataType: "LIST",
  //           variable: "sizeVariantHtml",
  //           operations: [
  //             {
  //               type: "MODIFY_LIST",
  //               operations: [
  //                 {
  //                   type: "CSS_SELECTOR",
  //                   value: "span",
  //                 },
  //                 {
  //                   type: "EXTRACT_TEXT",
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           source: "VARIABLE",
  //           name: "sizeVariantList",
  //           variable: "sizeVariantHtml",
  //           dataType: "LIST",
  //           operations: [
  //             {
  //               type: "INTERATE",
  //               value: "sizeElement",
  //               variables: [
  //                 {
  //                   source: "VARIABLE",
  //                   name: "size",
  //                   dataType: "STRING",
  //                   variable: "sizeElement",
  //                   operations: [
  //                     {
  //                       type: "CSS_SELECTOR",
  //                       value: "span",
  //                     },
  //                     {
  //                       type: "EXTRACT_TEXT",
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   source: "VARIABLE",
  //                   name: "skuId",
  //                   dataType: "STRING",
  //                   variable: "sizeElement",
  //                   operations: [
  //                     {
  //                       type: "CSS_SELECTOR",
  //                       value: "label",
  //                     },
  //                     {
  //                       type: "EXTRACT_ATTRIBUTE",
  //                       value: "data-variant-id",
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   source: "FUNCTION",
  //                   dataType: "VOID",
  //                   function: "addSourceAttributes",
  //                   parameters: [
  //                     {
  //                       dataType: "STRING",
  //                       name: "BRAND",
  //                     },
  //                     {
  //                       dataType: "STRING",
  //                       name: "brand",
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   source: "FUNCTION",
  //                   dataType: "VOID",
  //                   function: "addSourceAttributes",
  //                   parameters: [
  //                     {
  //                       dataType: "STRING",
  //                       name: "COLOR",
  //                     },
  //                     {
  //                       dataType: "STRING",
  //                       name: "color",
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   source: "FUNCTION",
  //                   dataType: "VOID",
  //                   function: "addSourceAttributes",
  //                   parameters: [
  //                     {
  //                       dataType: "STRING",
  //                       name: "GENDER",
  //                     },
  //                     {
  //                       dataType: "STRING",
  //                       name: "gender",
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   source: "FUNCTION",
  //                   dataType: "VOID",
  //                   function: "addSourceAttributes",
  //                   parameters: [
  //                     {
  //                       dataType: "STRING",
  //                       name: "CATEGORY",
  //                     },
  //                     {
  //                       dataType: "STRING",
  //                       name: "category",
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   source: "FUNCTION",
  //                   dataType: "VOID",
  //                   function: "addSourceAttributes",
  //                   parameters: [
  //                     {
  //                       dataType: "STRING",
  //                       name: "SIZE",
  //                     },
  //                     {
  //                       dataType: "STRING",
  //                       name: "size",
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   source: "FUNCTION",
  //                   dataType: "VOID",
  //                   function: "setImages",
  //                   parameters: [
  //                     {
  //                       dataType: "LIST",
  //                       name: "images",
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   source: "VARIABLE",
  //                   name: "derivedProductId",
  //                   dataType: "STRING",
  //                   variable: "productId",
  //                 },
  //                 {
  //                   source: "VARIABLE",
  //                   name: "derivedSkuId",
  //                   dataType: "STRING",
  //                   variable: "skuId",
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //       functions: [
  //         {
  //           name: "addSourceAttributes",
  //           dataType: "VOID",
  //           parameters: [
  //             {
  //               name: "catalog",
  //               dataType: "CATALOG",
  //             },
  //             {
  //               name: "attributeName",
  //               dataType: "STRING",
  //             },
  //             {
  //               name: "sourceAttribute",
  //               dataType: "STRING",
  //             },
  //           ],
  //           logic:
  //             "if(sourceAttribute){\n    def attributeCollection = new MetricCollection()\n    attributeCollection.setKey(attributeName)\n    attributeCollection.getValues().add(new MetricEntity<String>(sourceAttribute, 1.0))\n    catalog.sourceAttributes.add(attributeCollection)\n}",
  //         },
  //         {
  //           name: "setImages",
  //           dataType: "VOID",
  //           parameters: [
  //             {
  //               name: "catalog",
  //               dataType: "CATALOG",
  //             },
  //             {
  //               name: "imageUrls",
  //               dataType: "NONE",
  //             },
  //           ],
  //           logic:
  //             "List<MediaUrls> medList = new ArrayList<>();\nif(imageUrls){\n    for (def imageUrl : imageUrls) {\n        MediaUrls mediaUrls = new MediaUrls();\n        mediaUrls.setMediaType(MediaType.IMAGE);\n        mediaUrls.setUrl(imageUrl.toString());\n        medList.add(mediaUrls);\n    }\n    catalog.setMediaUrls(medList);\n}",
  //         },
  //       ],
  //       mappings: [
  //         {
  //           name: "TITLE",
  //           value: "title",
  //         },
  //         {
  //           name: "DESCRIPTION",
  //           value: "title",
  //         },
  //         {
  //           name: "BREADCRUMB",
  //           value: "breadcrumbList",
  //         },
  //         {
  //           name: "PRIMARY_IMAGE",
  //           value: "primaryImage",
  //         },
  //         {
  //           name: "SIZE_VARIANT",
  //           value: "sizeVariant",
  //         },
  //         {
  //           name: "DOMAIN_ID",
  //           value: "DOMAIN_ID",
  //         },
  //         {
  //           name: "URL_NAME",
  //           value: "PRODUCT_PAGE",
  //         },
  //         {
  //           name: "PRODUCT_URL",
  //           value: "url",
  //         },
  //         {
  //           name: "PRODUCT_ID",
  //           value: "productId",
  //         },
  //         {
  //           name: "DERIVED_PRODUCT_ID",
  //           value: "derivedProductId",
  //         },
  //         {
  //           name: "SKU_ID",
  //           value: "skuId",
  //         },
  //         {
  //           name: "DERIVED_SKU_ID",
  //           value: "derivedSkuId",
  //         },
  //       ],
  //     }),
  //   };
  //   fetch("http://localhost:8080/api/execute/var", requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div className="card">
      <Accordion multiple activeIndex={[1]}>
        <AccordionTab header="Functions">
          <h2>Function</h2>
          <Functions />
        </AccordionTab>
        <AccordionTab header="Variables">
          <div className="body">
            <h2>Variables</h2>
            <Variables variable={variable} setVariables={setVariables} />
          </div>
        </AccordionTab>
        <AccordionTab header="Mappings">
          <Mappings
            variable={variable}
            mappings={mappings}
            setMappings={setMappings}
          />
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default HeroContainer;
