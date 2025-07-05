const express = require('express');
const { request } = require('express');
const uniqid = require('uniqid');

const getIndex = (req, res) => {
    res.render('index');
};

const getSocketInstanceID = (req, res) => {
    const id = uniqid()
    console.log('generated uniqid', id)
    res.status(200).send({ id: id });
}

const getGame = (req, res) => {
    res.render('game');
};
const getLearnGame = (req, res) => {
    res.render('learngame');
};
const getQuestions = (req, res) => {
    res.render('questions');
};

const getABC = (req, res) => {
    res.render('abc');
};

const getKKK = (req, res) => {
    res.render('kkk');
};


const getChatbot = (req, res) => {
    // Listen for client connection
    

    res.status(200).send()
}

module.exports = {
    getIndex,
    getSocketInstanceID,
    getGame,
    getLearnGame,
    getQuestions,
    getABC,
    getKKK
}