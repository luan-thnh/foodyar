// Stripe.setPublishableKey('pk_test_TYooMQauvdEDq54NiTphI7jx')
Stripe.setPublishableKey(
  'pk_test_51MIHGXCUbUHzLxzKDK2XKGAEvbwui5JKHYnlLEQczcxeLzfglEsNoKE1hUfj2UHoVQI5KxGaApAuUNL4TOLT4rHN00u9CLvnC5'
)

var btnBuy = $('#checkout-form')

btnBuy.submit(function (e) {
  btnBuy.find('button').prop('disable', true)
  Stripe.card.createToken(
    {
      number: $('#credit-number').val(),
      name: $('#credit-name').val(),
      exp_month: $('#expiration_month').val(),
      exp_year: $('#expiration_year').val(),
      cvc: $('#checkout_cvc').val(),
    },
    stripeResponseHandler
  )
  return false
})

function stripeResponseHandler(status, response) {
  if (response.error) {
    btnBuy.find('.payment-errors').text(response.error.message)
    btnBuy.find('button').prop('disabled', false)
  } else {
    var token = response.id
    btnBuy.append($('<input type="hidden" name="stripeToken" />').val(token))
    btnBuy.get(0).submit()
  }
}
