const carrinhoLoc = {
  btnCupom: 'input[name=apply_coupon]',
  btnAtualizar: 'input[name=update_cart]',
  btnCheckout: '.checkout-button.button.alt.wc-forward',
  txtQuantidade: 'input[title="Qty"]',
  btnRemovePrimeiroItem: ':nth-child(1) > .product-remove > .remove',
  msgRemovido: '.woocommerce-message',
  optCarrinhoVazio: '.cartcontents'
};

module.exports = carrinhoLoc;