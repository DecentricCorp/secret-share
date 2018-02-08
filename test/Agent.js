"use strict"
var UserLib = require('../build/base/User')
var UserType = UserLib.UserType
var Agent = require('../build/Agent').Agent
var Unloq = require('../build/partner/Unloq').Unloq
var chai = require('chai')
var expect = chai.expect
var should = chai.should()

describe('Agent', () => {
    it('identifies as a client when cast as client', function () {
        var agent = new Agent(UserLib.Client)
        expect(agent.user.constructor.name).to.equal("Client")
        expect(agent.user.type).to.equal(UserType.Client)
    })

    it('identifies as an identity when cast as identity', function () {
        var agent = new Agent(UserLib.Identity)
        expect(agent.user.constructor.name).to.equal("Identity")
        expect(agent.user.type).to.equal(UserType.Identity)
    })

    it('identifies as an Unloq identity when cast as an Unloq identity', function () {
        var agent = new Agent(UserLib.Identity, Unloq, process.env.UNLOQ_KEY)
        expect(agent.user.constructor.name).to.equal("Identity")
        expect(agent.user.type).to.equal(UserType.Identity)
        expect(agent.user.identity.type).to.equal('Unloq')
    })

    it('identifies as a server when cast as server', function () {
        var agent = new Agent(UserLib.Server)
        expect(agent.user.constructor.name).to.equal("Server")
        expect(agent.user.type).to.equal(UserType.Server)
    })

    it('identifies as generic when not cast', function () {
        var agent = new Agent()
        expect(agent.user.constructor.name).to.equal("User")
        expect(agent.user.type).to.equal(UserType.Generic)
    })

    it('allows a server to generate a random envelope', function () {
        var agent = new Agent(UserLib.Server)
        var data = agent.user.Generate()
        expect(data).to.exist
    })

    it('allows a server to split a random envelope', function () {
        var agent = new Agent(UserLib.Server)
        var data = agent.user.Split(2, 2, 256)
        expect(data).to.exist
    })

    it('allows a server to split and reassemble a random envelope', function () {
        var agent = new Agent(UserLib.Server)
        var key = agent.Generate()
        var shares = agent.Split(2, 2, 256)
        var combined = agent.Combine(shares.value)
        expect(combined.value).to.equal(key.value)
    })

    it('prevents a generic agent from generating a random envelope', function () {
        var agent = new Agent()
        expect(function () {
            agent.Generate()
        }).to.throw('Method not implemented.')
    })
})
