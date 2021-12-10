export let mint= `/*<![CDATA[*/
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'matu-aromaterapia.myshopify.com',
          storefrontAccessToken: '12acae1957e86feb2facee5cdf721882',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '6759188431053',
            node: document.getElementById('product-component-1637725592028'),
            moneyFormat: '%24%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px"
            }
          },
          "title": {
            "font-family": "Roboto, sans-serif",
            "font-size": "14px",
            "color": "#000000"
          },
          "button": {
            "font-family": "Roboto, sans-serif",
            ":hover": {
              "background-color": "#d2007b"
            },
            "background-color": "#e90089",
            ":focus": {
              "background-color": "#d2007b"
            },
            "border-radius": "8px",
            "padding-left": "51px",
            "padding-right": "51px"
          },
          "price": {
            "font-size": "15px",
            "color": "#000000"
          },
          "compareAt": {
            "font-size": "12.75px",
            "color": "#000000"
          },
          "unitPrice": {
            "font-size": "12.75px",
            "color": "#000000"
          }
        },
        "buttonDestination": "modal",
        "contents": {
          "options": false
        },
        "text": {
          "button": "Ver "
        },
        "googleFonts": [
          "Roboto"
        ]
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-family": "Roboto, sans-serif",
            ":hover": {
              "background-color": "#d2007b"
            },
            "background-color": "#e90089",
            ":focus": {
              "background-color": "#d2007b"
            },
            "border-radius": "8px",
            "padding-left": "51px",
            "padding-right": "51px"
          },
          "title": {
            "font-family": "Helvetica Neue, sans-serif",
            "font-weight": "bold",
            "font-size": "26px",
            "color": "#4c4c4c"
          },
          "price": {
            "font-family": "Helvetica Neue, sans-serif",
            "font-weight": "normal",
            "font-size": "18px",
            "color": "#4c4c4c"
          },
          "compareAt": {
            "font-family": "Helvetica Neue, sans-serif",
            "font-weight": "normal",
            "font-size": "15.299999999999999px",
            "color": "#4c4c4c"
          },
          "unitPrice": {
            "font-family": "Helvetica Neue, sans-serif",
            "font-weight": "normal",
            "font-size": "15.299999999999999px",
            "color": "#4c4c4c"
          }
        },
        "googleFonts": [
          "Roboto"
        ],
        "text": {
          "button": "Agregar"
        }
      },
      "option": {},
      "cart": {
        "styles": {
          "button": {
            "font-family": "Roboto, sans-serif",
            ":hover": {
              "background-color": "#d2007b"
            },
            "background-color": "#e90089",
            ":focus": {
              "background-color": "#d2007b"
            },
            "border-radius": "8px"
          },
          "title": {
            "color": "#000000"
          },
          "header": {
            "color": "#000000"
          },
          "lineItems": {
            "color": "#000000"
          },
          "subtotalText": {
            "color": "#000000"
          },
          "subtotal": {
            "color": "#000000"
          },
          "notice": {
            "color": "#000000"
          },
          "currency": {
            "color": "#000000"
          },
          "close": {
            "color": "#000000",
            ":hover": {
              "color": "#000000"
            }
          },
          "empty": {
            "color": "#000000"
          },
          "noteDescription": {
            "color": "#000000"
          },
          "discountText": {
            "color": "#000000"
          },
          "discountIcon": {
            "fill": "#000000"
          },
          "discountAmount": {
            "color": "#000000"
          }
        },
        "text": {
          "title": "Carrito",
          "total": "TOTAL",
          "empty": "Tu carrito de compras esta vacio",
          "button": "CONFIRMAR"
        },
        "googleFonts": [
          "Roboto"
        ]
      },
      "toggle": {
        "styles": {
          "toggle": {
            "font-family": "Roboto, sans-serif",
            "background-color": "#e90089",
            ":hover": {
              "background-color": "#d2007b"
            },
            ":focus": {
              "background-color": "#d2007b"
            }
          }
        },
        "googleFonts": [
          "Roboto"
        ]
      },
      "lineItem": {
        "styles": {
          "variantTitle": {
            "color": "#000000"
          },
          "title": {
            "color": "#000000"
          },
          "price": {
            "color": "#000000"
          },
          "fullPrice": {
            "color": "#000000"
          },
          "discount": {
            "color": "#000000"
          },
          "discountIcon": {
            "fill": "#000000"
          },
          "quantity": {
            "color": "#000000"
          },
          "quantityIncrement": {
            "color": "#000000",
            "border-color": "#000000"
          },
          "quantityDecrement": {
            "color": "#000000",
            "border-color": "#000000"
          },
          "quantityInput": {
            "color": "#000000",
            "border-color": "#000000"
          }
        }
      }
    },
          });
        });
      }
    })();
    /*]]>*/`

    // <div id='product-component-1637725592028'></div>

    export let mintonlybtn= `/*<![CDATA[*/
      (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          } else {
            loadScript();
          }
        } else {
          loadScript();
        }
        function loadScript() {
          var script = document.createElement('script');
          script.async = true;
          script.src = scriptURL;
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
          script.onload = ShopifyBuyInit;
        }
        function ShopifyBuyInit() {
          var client = ShopifyBuy.buildClient({
            domain: 'matu-aromaterapia.myshopify.com',
            storefrontAccessToken: '12acae1957e86feb2facee5cdf721882',
          });
          ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
              id: '6759188431053',
              node: document.getElementById('product-component-1639112382209'),
              moneyFormat: '%24%7B%7Bamount_with_comma_separator%7D%7D',
              options: {
        "product": {
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "calc(25% - 20px)",
                "margin-left": "20px",
                "margin-bottom": "50px"
              }
            },
            "title": {
              "font-family": "Roboto, sans-serif",
              "color": "#9fe3df"
            },
            "button": {
              "font-size": "17px",
              "padding-top": "16.5px",
              "padding-bottom": "16.5px",
              "color": "#fcf9f9",
              ":hover": {
                "color": "#fcf9f9",
                "background-color": "#d2007b"
              },
              "background-color": "#e90089",
              ":focus": {
                "background-color": "#d2007b"
              },
              "border-radius": "0px",
              "padding-left": "37px",
              "padding-right": "37px"
            },
            "quantityInput": {
              "font-size": "17px",
              "padding-top": "16.5px",
              "padding-bottom": "16.5px"
            },
            "price": {
              "color": "#000000"
            },
            "compareAt": {
              "color": "#000000"
            },
            "unitPrice": {
              "color": "#000000"
            }
          },
          "contents": {
            "img": false,
            "button": false,
            "buttonWithQuantity": true,
            "title": false,
            "price": false
          },
          "text": {
            "button": "Comprar"
          },
          "googleFonts": [
            "Roboto"
          ]
        },
        "productSet": {
          "styles": {
            "products": {
              "@media (min-width: 601px)": {
                "margin-left": "-20px"
              }
            }
          }
        },
        "modalProduct": {
          "contents": {
            "img": false,
            "imgWithCarousel": true,
            "button": false,
            "buttonWithQuantity": true
          },
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px"
              }
            },
            "button": {
              "font-size": "17px",
              "padding-top": "16.5px",
              "padding-bottom": "16.5px",
              "color": "#fcf9f9",
              ":hover": {
                "color": "#fcf9f9",
                "background-color": "#d2007b"
              },
              "background-color": "#e90089",
              ":focus": {
                "background-color": "#d2007b"
              },
              "border-radius": "0px",
              "padding-left": "37px",
              "padding-right": "37px"
            },
            "quantityInput": {
              "font-size": "17px",
              "padding-top": "16.5px",
              "padding-bottom": "16.5px"
            },
            "title": {
              "font-family": "Helvetica Neue, sans-serif",
              "font-weight": "bold",
              "font-size": "26px",
              "color": "#4c4c4c"
            },
            "price": {
              "font-family": "Helvetica Neue, sans-serif",
              "font-weight": "normal",
              "font-size": "18px",
              "color": "#4c4c4c"
            },
            "compareAt": {
              "font-family": "Helvetica Neue, sans-serif",
              "font-weight": "normal",
              "font-size": "15.299999999999999px",
              "color": "#4c4c4c"
            },
            "unitPrice": {
              "font-family": "Helvetica Neue, sans-serif",
              "font-weight": "normal",
              "font-size": "15.299999999999999px",
              "color": "#4c4c4c"
            }
          },
          "text": {
            "button": "Agregar"
          }
        },
        "option": {},
        "cart": {
          "styles": {
            "button": {
              "font-size": "17px",
              "padding-top": "16.5px",
              "padding-bottom": "16.5px",
              "color": "#fcf9f9",
              ":hover": {
                "color": "#fcf9f9",
                "background-color": "#d2007b"
              },
              "background-color": "#e90089",
              ":focus": {
                "background-color": "#d2007b"
              },
              "border-radius": "0px"
            },
            "title": {
              "color": "#000000"
            },
            "header": {
              "color": "#000000"
            },
            "lineItems": {
              "color": "#000000"
            },
            "subtotalText": {
              "color": "#000000"
            },
            "subtotal": {
              "color": "#000000"
            },
            "notice": {
              "color": "#000000"
            },
            "currency": {
              "color": "#000000"
            },
            "close": {
              "color": "#000000",
              ":hover": {
                "color": "#000000"
              }
            },
            "empty": {
              "color": "#000000"
            },
            "noteDescription": {
              "color": "#000000"
            },
            "discountText": {
              "color": "#000000"
            },
            "discountIcon": {
              "fill": "#000000"
            },
            "discountAmount": {
              "color": "#000000"
            }
          },
          "text": {
            "title": "Carrito",
            "total": "TOTAL",
            "empty": "Tu carrito de compras esta vacio",
            "button": "CONFIRMAR"
          }
        },
        "toggle": {
          "styles": {
            "toggle": {
              "background-color": "#e90089",
              ":hover": {
                "background-color": "#d2007b"
              },
              ":focus": {
                "background-color": "#d2007b"
              }
            },
            "count": {
              "font-size": "17px",
              "color": "#fcf9f9",
              ":hover": {
                "color": "#fcf9f9"
              }
            },
            "iconPath": {
              "fill": "#fcf9f9"
            }
          }
        },
        "lineItem": {
          "styles": {
            "variantTitle": {
              "color": "#000000"
            },
            "title": {
              "color": "#000000"
            },
            "price": {
              "color": "#000000"
            },
            "fullPrice": {
              "color": "#000000"
            },
            "discount": {
              "color": "#000000"
            },
            "discountIcon": {
              "fill": "#000000"
            },
            "quantity": {
              "color": "#000000"
            },
            "quantityIncrement": {
              "color": "#000000",
              "border-color": "#000000"
            },
            "quantityDecrement": {
              "color": "#000000",
              "border-color": "#000000"
            },
            "quantityInput": {
              "color": "#000000",
              "border-color": "#000000"
            }
          }
        }
      },
            });
          });
        }
      })();
      /*]]>*/`
      // <div id='product-component-1639112382209'></div>
      
