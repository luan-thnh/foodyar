var Joi = require('joi')

function registerValidator(data) {
  var registerRule = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    }),

    name: Joi.string().alphanum().min(3).max(30).required(),

    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    password2: Joi.ref('password'),
  })

  return registerRule.validate(data)
}

function loginValidator(data) {
  var registerRule = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    }),

    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  })

  return registerRule.validate(data)
}

module.exports = { registerValidator, loginValidator }
