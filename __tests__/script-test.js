jest.unmock('../src/js/script')
jest.unmock('jquery')

describe('onInputChange should return with the right key/value pair', () => {

	it('should return `price: 100`', () => {
		document.body.innerHTML = '<input type="text" id="price" />';

		let script = require('../src/js/script')		

		const $ = require('jquery')
		const event = {
			currentTarget: $('#price')[0]
		}

		$('#price').val('100')
		expect(script.onInputChange(event)).toEqual(jasmine.objectContaining({
			price: '100'
		}))
	})
})

describe('build current item', () => {
	let script = require('../src/js/script')
	
	it('should return the right markup', () => {
		let currentItem = {price: '100'}
		expect(script.buildListItem(currentItem)).toEqual('<li><em>$100</em></li>')
	})
	
	it('should return the right markup', () => {
		let currentItem = {provider: 'provider'}
		expect(script.buildListItem(currentItem)).toEqual('<li> | provider</li>')
	})
	
	it('should return the right markup', () => {
		let currentItem = {productname: 'productname'}
		expect(script.buildListItem(currentItem)).toEqual('<li> | <strong>productname</strong></li>')
	})

	it('should return the right markup', () => {
		let currentItem = {producturl: 'producturl'}
		expect(script.buildListItem(currentItem)).toEqual('<li><a href="producturl"></a></li>')
	})

	it('should return the right markup', () => {
		let currentItem = {promocode: 'promocode'}
		expect(script.buildListItem(currentItem)).toEqual('<li> | promocode</li>')
	})
})

describe('append item to list', () => {
	it('should return the right markup', () => {
		document.body.innerHTML = '<ul class="commerce"></ul>'
		const $ = require('jquery')
		
		let script = require('../src/js/script')
		let el = '<li><em>$100</em></li>';
		let $commerce = $('.commerce')
		expect(script.appendItemToList(el)).toEqual($commerce)
	})
})


describe('reset state', () => {
	
	it('should reset the input field', () => {
		document.body.innerHTML = '<input id="price" type="text" value="hello" />'
		
		let script = require('../src/js/script')

		const $ = require('jquery')
		const $INPUT_ELS = $('input[type=text]')

		script.resetState()

		expect($('#price').val()).toEqual('')
	})

})

