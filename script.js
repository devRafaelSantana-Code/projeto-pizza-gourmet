let cart = [];
let modalQuantity = 1;
let modalKey = 0;
let selectedSize = 2;

const selectEl = (element) => document.querySelector(element);
const selectAllEl = (element) => document.querySelectorAll(element);

const formatCurrency = (value) => `R$ ${value.toFixed(2).replace(".", ",")}`;

const themeToggleBtn = selectEl(".theme-toggle");
if (themeToggleBtn) {
   themeToggleBtn.addEventListener("click", () => {
      const body = selectEl("body");
      if (body.classList.contains("dark-theme")) {
         body.classList.remove("dark-theme");
         body.classList.add("light-theme");
      } else {
         body.classList.remove("light-theme");
         body.classList.add("dark-theme");
      }
   });
}

function updateModalPrice() {
   const pizza = pizzaDataList[modalKey];
   const currentPrice = pizza.prices[selectedSize] * modalQuantity;
   selectEl(".pizzaInfo--actualPrice").innerHTML = formatCurrency(currentPrice);
}

pizzaDataList.forEach((pizza, index) => {
   const pizzaItem = selectEl(".models .pizza-item").cloneNode(true);

   pizzaItem.setAttribute("data-key", index);
   pizzaItem.querySelector(".pizza-item--img img").src = pizza.img;
   pizzaItem.querySelector(".pizza-item--price").innerHTML =
      `A partir de ${formatCurrency(pizza.prices[0])}`;
   pizzaItem.querySelector(".pizza-item--name").innerHTML = pizza.name;
   pizzaItem.querySelector(".pizza-item--desc").innerHTML = pizza.description;

   pizzaItem.querySelector("a").addEventListener("click", (event) => {
      event.preventDefault();

      const key = event.currentTarget
         .closest(".pizza-item")
         .getAttribute("data-key");
      modalQuantity = 1;
      modalKey = key;
      selectedSize = 2;

      selectEl(".pizzaBig img").src = pizzaDataList[key].img;
      selectEl(".pizzaInfo h1").innerHTML = pizzaDataList[key].name;
      selectEl(".pizzaInfo--desc").innerHTML = pizzaDataList[key].description;

      selectEl(".pizzaInfo--size.selected").classList.remove("selected");

      selectAllEl(".pizzaInfo--size").forEach((sizeEl, sizeIndex) => {
         if (sizeIndex === selectedSize) {
            sizeEl.classList.add("selected");
         }
         sizeEl.querySelector("span").innerHTML =
            pizzaDataList[key].sizes[sizeIndex];
      });

      selectEl(".pizzaInfo--qt").innerHTML = modalQuantity;
      updateModalPrice();

      selectEl(".pizzaWindowArea").style.display = "flex";
      selectEl(".pizzaWindowArea").style.opacity = 0;

      setTimeout(() => {
         selectEl(".pizzaWindowArea").style.opacity = 1;
      }, 200);
   });

   selectEl(".pizza-area").append(pizzaItem);
});

function closeModal() {
   selectEl(".pizzaWindowArea").style.opacity = 0;
   setTimeout(() => {
      selectEl(".pizzaWindowArea").style.display = "none";
   }, 500);
}

selectAllEl(".pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton").forEach(
   (button) => {
      button.addEventListener("click", closeModal);
   },
);

selectEl(".pizzaInfo--qtmenos").addEventListener("click", () => {
   if (modalQuantity > 1) {
      modalQuantity--;
      selectEl(".pizzaInfo--qt").innerHTML = modalQuantity;
      updateModalPrice();
   }
});

selectEl(".pizzaInfo--qtmais").addEventListener("click", () => {
   modalQuantity++;
   selectEl(".pizzaInfo--qt").innerHTML = modalQuantity;
   updateModalPrice();
});

selectAllEl(".pizzaInfo--size").forEach((sizeEl, sizeIndex) => {
   sizeEl.addEventListener("click", () => {
      selectEl(".pizzaInfo--size.selected").classList.remove("selected");
      sizeEl.classList.add("selected");
      selectedSize = sizeIndex;
      updateModalPrice();
   });
});

selectEl(".pizzaInfo--addButton").addEventListener("click", () => {
   const itemIdentifier = `${pizzaDataList[modalKey].id}-${selectedSize}`;
   const existingItemIndex = cart.findIndex(
      (item) => item.identifier === itemIdentifier,
   );

   if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += modalQuantity;
   } else {
      cart.push({
         identifier: itemIdentifier,
         id: pizzaDataList[modalKey].id,
         size: selectedSize,
         quantity: modalQuantity,
      });
   }

   closeModal();
   updateCart();
   openCartView();
});

function openCartView() {
   if (cart.length > 0) {
      selectEl("aside").classList.add("show");
   }
}

function closeCartView() {
   selectEl("aside").classList.remove("show");
}

selectEl(".menu-openner").addEventListener("click", openCartView);
selectEl(".menu-closer").addEventListener("click", closeCartView);

function updateCart() {
   selectEl(".menu-openner span").innerHTML = cart.reduce(
      (total, item) => total + item.quantity,
      0,
   );

   if (cart.length > 0) {
      selectEl(".cart").innerHTML = "";
      let subtotal = 0;

      cart.forEach((cartItem, index) => {
         const pizzaData = pizzaDataList.find(
            (pizza) => pizza.id === cartItem.id,
         );
         const itemPrice = pizzaData.prices[cartItem.size];
         subtotal += itemPrice * cartItem.quantity;

         const cartItemEl = selectEl(".models .cart--item").cloneNode(true);
         const sizeLabels = ["IND", "COM", "EXC"];
         const pizzaName = `${pizzaData.name} - (${sizeLabels[cartItem.size] || ""})`;

         cartItemEl.querySelector("img").src = pizzaData.img;
         cartItemEl.querySelector(".cart--item-nome").innerHTML = pizzaName;
         cartItemEl.querySelector(".cart--item--qt").innerHTML =
            cartItem.quantity;

         cartItemEl
            .querySelector(".cart--item-qtmenos")
            .addEventListener("click", () => {
               if (cartItem.quantity > 1) {
                  cartItem.quantity--;
               } else {
                  cart.splice(index, 1);
               }
               updateCart();
            });

         cartItemEl
            .querySelector(".cart--item-qtmais")
            .addEventListener("click", () => {
               cartItem.quantity++;
               updateCart();
            });

         selectEl(".cart").append(cartItemEl);
      });

      const discount = subtotal * 0.1;
      const total = subtotal - discount;

      selectEl(".subtotal span:last-child").innerHTML =
         formatCurrency(subtotal);
      selectEl(".desconto span:last-child").innerHTML =
         formatCurrency(discount);
      selectEl(".total span:last-child").innerHTML = formatCurrency(total);
   } else {
      closeCartView();
   }
}

function openCheckout() {
   if (cart.length === 0) return;

   const summaryContainer = selectEl(".checkoutSummary");
   summaryContainer.innerHTML = "";
   let totalAmount = 0;

   cart.forEach((cartItem) => {
      const pizzaData = pizzaDataList.find((pizza) => pizza.id === cartItem.id);
      const itemPrice = pizzaData.prices[cartItem.size];
      const cost = itemPrice * cartItem.quantity;
      totalAmount += cost;

      const sizeLabels = ["Individual", "Compartilhar", "Exclusiva"];
      const line = document.createElement("div");
      line.classList.add("checkoutSummaryLine");
      line.innerHTML = `
         <span>${cartItem.quantity}x ${pizzaData.name} (${sizeLabels[cartItem.size]})</span>
         <span>${formatCurrency(cost)}</span>
      `;
      summaryContainer.append(line);
   });

   const discountAmount = totalAmount * 0.1;
   const finalAmount = totalAmount - discountAmount;

   const finalLine = document.createElement("div");
   finalLine.classList.add("checkoutSummaryLine");
   finalLine.style.fontWeight = "700";
   finalLine.style.borderTop = "1px solid var(--text-main)";
   finalLine.style.marginTop = "15px";
   finalLine.innerHTML = `
      <span>Total com Desconto (10%)</span>
      <span>${formatCurrency(finalAmount)}</span>
   `;
   summaryContainer.append(finalLine);

   const checkoutArea = selectEl(".checkoutWindowArea");
   checkoutArea.style.display = "flex";
   setTimeout(() => {
      checkoutArea.style.opacity = "1";
   }, 50);
}

function closeCheckout() {
   const checkoutArea = selectEl(".checkoutWindowArea");
   checkoutArea.style.opacity = "0";
   setTimeout(() => {
      checkoutArea.style.display = "none";
   }, 300);
}

selectEl(".cart--finalizar").addEventListener("click", openCheckout);
selectEl(".checkoutCancelBtn").addEventListener("click", closeCheckout);
selectEl(".checkoutConfirmBtn").addEventListener("click", () => {
   alert("Pedido enviado com sucesso!");
   cart = [];
   updateCart();
   closeCheckout();
});
