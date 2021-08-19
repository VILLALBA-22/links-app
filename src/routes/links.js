const express = require('express')
const { route } = require('.')
const router = express.Router()
const pool = require('../database')

router.get('/add', (req, res) => {
	res.render('links/add')
})

router.post('/add', async (req, res) => {
	const { title, url, description } = req.body
	const newLink = {
		title,
		url,
		description,
	}
	await pool.query('INSERT INTO LINKS SET ?', [newLink])
	req.flash('success', 'Link saved succesfully')
	res.redirect('/links')
})

router.get('/', async (req, res) => {
	const links = await pool.query('SELECT * FROM LINKS')
	console.log(links)
	res.render('links/list', { links })
})

router.get('/delete/:id', async (req, res) => {
	const { id } = req.params
	await pool.query(`DELETE FROM LINKS WHERE ID = ?`, [id])
	req.flash('success', 'Link removed succesfully')
	res.redirect('/links')
})

router.get('/edit/:id', async (req, res) => {
	const { id } = req.params
	const link = await pool.query(`SELECT * FROM LINKS WHERE ID = ?`, [id])

	res.render('links/edit', { link: link[0] })
})

router.post('/edit/:id', async (req, res) => {
	const { id } = req.params
	const { title, url, description } = req.body
	const newLink = { title, url, description }
	await pool.query('UPDATE LINKS SET ? WHERE ID = ?', [newLink, id])
	req.flash('success', 'Link updated succesfully')
	res.redirect('/links')
})

module.exports = router
