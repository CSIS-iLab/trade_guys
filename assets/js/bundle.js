!(function(t) {
  var e = {}
  function i(o) {
    if (e[o]) return e[o].exports
    var n = (e[o] = { i: o, l: !1, exports: {} })
    return t[o].call(n.exports, n, n.exports, i), (n.l = !0), n.exports
  }
  ;(i.m = t),
    (i.c = e),
    (i.d = function(t, e, o) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o })
    }),
    (i.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (i.t = function(t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t
      var o = Object.create(null)
      if (
        (i.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var n in t)
          i.d(
            o,
            n,
            function(e) {
              return t[e]
            }.bind(null, n)
          )
      return o
    }),
    (i.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default
            }
          : function() {
              return t
            }
      return i.d(e, 'a', e), e
    }),
    (i.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (i.p = ''),
    i((i.s = 1))
})([
  function(t, e, i) {
    'use strict'
    var o,
      n = 'protocol hostname host pathname port search hash href'.split(' ')
    function r(t) {
      o || (o = document.createElement('a'))
      var e = {}
      o.href = t || ''
      for (var i = 0, r = n.length; i < r; i++) {
        var s = n[i]
        e[s] = o[s]
      }
      return e
    }
    function s(t, e, i) {
      var o = r(t),
        n = /\?(?:.*)$/.test(o.search) ? '&' : '?'
      return (
        o.protocol +
        '//' +
        o.host +
        o.port +
        o.pathname +
        o.search +
        n +
        e +
        '=' +
        i +
        o.hash
      )
    }
    function a(t) {
      if (!(this instanceof a)) return new a(t)
      t ||
        console.info(
          'SoundCloud API requires clientId, get it at https://developers.soundcloud.com'
        ),
        (this._events = {}),
        (this._clientId = t),
        (this._baseUrl = 'https://api.soundcloud.com'),
        (this.playing = !1),
        (this.duration = 0),
        (this.audio = document.createElement('audio'))
    }
    ;(a.prototype.resolve = function(t, e) {
      var i =
        this._baseUrl +
        '/resolve.json?url=' +
        encodeURIComponent(t) +
        '&client_id=' +
        this._clientId
      this._json(
        i,
        function(i) {
          if ((this.cleanData(), Array.isArray(i)))
            (i = { tracks: i }), (this._playlist = i)
          else if (i.tracks) this._playlist = i
          else {
            this._track = i
            var o = r(t)
            this._track.stream_url += o.hash
          }
          ;(this.duration =
            i.duration && !isNaN(i.duration) ? i.duration / 1e3 : 0),
            e(i)
        }.bind(this)
      )
    }),
      (a.prototype._jsonp = function(t, e) {
        var i = document.getElementsByTagName('script')[0] || document.head,
          o = document.createElement('script'),
          n =
            'jsonp_callback_' +
            new Date().valueOf() +
            Math.floor(1e3 * Math.random())
        ;(window[n] = function(t) {
          o.parentNode && o.parentNode.removeChild(o),
            (window[n] = function() {}),
            e(t)
        }),
          (o.src = s(t, 'callback', n)),
          i.parentNode.insertBefore(o, i)
      }),
      (a.prototype._json = function(t, e) {
        var i = new XMLHttpRequest()
        i.open('GET', t),
          (i.onreadystatechange = function() {
            if (4 === i.readyState && 200 === i.status) {
              var t = {}
              try {
                t = JSON.parse(i.responseText)
              } catch (t) {}
              e(t)
            }
          }),
          i.send(null)
      }),
      (a.prototype.on = function(t, e) {
        ;(this._events[t] = e), this.audio.addEventListener(t, e, !1)
      }),
      (a.prototype.off = function(t, e) {
        ;(this._events[t] = null), this.audio.removeEventListener(t, e)
      }),
      (a.prototype.unbindAll = function() {
        for (var t in this._events) {
          var e = this._events[t]
          e && this.off(t, e)
        }
      }),
      (a.prototype.preload = function(t, e) {
        ;(this._track = { stream_url: t }),
          e && (this.audio.preload = e),
          (this.audio.src = this._clientId
            ? s(t, 'client_id', this._clientId)
            : t)
      }),
      (a.prototype.play = function(t) {
        var e
        if ((t = t || {}).streamUrl) e = t.streamUrl
        else if (this._playlist) {
          var i = this._playlist.tracks.length
          if (i) {
            if (
              (void 0 === t.playlistIndex
                ? (this._playlistIndex = this._playlistIndex || 0)
                : (this._playlistIndex = t.playlistIndex),
              this._playlistIndex >= i || this._playlistIndex < 0)
            )
              return void (this._playlistIndex = 0)
            e = this._playlist.tracks[this._playlistIndex].stream_url
          }
        } else this._track && (e = this._track.stream_url)
        if (!e)
          throw new Error(
            'There is no tracks to play, use `streamUrl` option or `load` method'
          )
        return (
          this._clientId && (e = s(e, 'client_id', this._clientId)),
          e !== this.audio.src && (this.audio.src = e),
          (this.playing = e),
          this.audio.play()
        )
      }),
      (a.prototype.pause = function() {
        this.audio.pause(), (this.playing = !1)
      }),
      (a.prototype.stop = function() {
        this.audio.pause(), (this.audio.currentTime = 0), (this.playing = !1)
      }),
      (a.prototype.next = function(t) {
        t = t || {}
        var e = this._playlist.tracks.length
        if (this._playlistIndex >= e - 1) {
          if (!t.loop) return
          this._playlistIndex = -1
        }
        if (this._playlist && e)
          return this.play({ playlistIndex: ++this._playlistIndex })
      }),
      (a.prototype.previous = function() {
        if (!(this._playlistIndex <= 0))
          return this._playlist && this._playlist.tracks.length
            ? this.play({ playlistIndex: --this._playlistIndex })
            : void 0
      }),
      (a.prototype.seek = function(t) {
        if (!this.audio.readyState) return !1
        var e =
          t.offsetX / t.target.offsetWidth ||
          (t.layerX - t.target.offsetLeft) / t.target.offsetWidth
        this.audio.currentTime = e * (this.audio.duration || 0)
      }),
      (a.prototype.cleanData = function() {
        ;(this._track = void 0), (this._playlist = void 0)
      }),
      (a.prototype.setVolume = function(t) {
        this.audio.readyState && (this.audio.volume = t)
      }),
      (a.prototype.setTime = function(t) {
        this.audio.readyState && (this.audio.currentTime = t)
      }),
      (t.exports = a)
  },
  function(t, e, i) {
    t.exports = i(2)
  },
  function(t, e, i) {
    'use strict'
    i.r(e)
    var o = i(0)
    let n = []
    const r = (t, e) => {
        let i = new o('e1b9039f824fdaf6ec1fc594037c1ac7')
        i.resolve(t, function(t) {
          let i = s(t.duration)
          e.textContent = i
        }),
          n.push(i)
      },
      s = t => {
        const e = Math.floor(t / 6e4),
          i = ((t % 6e4) / 1e3).toFixed(0)
        return e + ':' + (i < 10 ? '0' : '') + i
      },
      a = (t, e) => {
        setInterval(() => {
          let i = (n[e].audio.currentTime / n[e].audio.duration) * 100
          t.style.width = `${i}%`
        }, 300)
      },
      l = (t, e, i) => {
        t.querySelector('.progress-bar').addEventListener('click', o => {
          let r = t.querySelector('.progress-bar').offsetWidth,
            s = (o.offsetX / r) * n[i].audio.duration
          ;(n[i].audio.currentTime = s), a(e, i)
        })
      }
    window.addEventListener('DOMContentLoaded', () => {
      !(function() {
        let t = document.querySelectorAll('.audio-player')
        t &&
          (t.forEach(t => {
            let e = t.querySelector('.audio-control').dataset.url,
              i = t.querySelector('.duration')
            r(e, i)
          }),
          t.forEach((t, e) => {
            t.querySelectorAll('.audio-control i, .action').forEach(i => {
              let o = t.querySelector('.progress')
              i.addEventListener('click', () => {
                let i = t.querySelector('.audio-control i')
                i.classList.toggle('icon-pause'),
                  i.classList.toggle('icon-play')
                let r = t.querySelector('.action')
                'listen' === r.textContent
                  ? (r.textContent = 'pause')
                  : (r.textContent = 'listen'),
                  l(t, o, e),
                  n[e] && n[e].playing
                    ? n[e].pause()
                    : n[e] && !n[e].playing && (n[e].play(), a(o, e))
              })
            })
          }))
      })()
    })
  }
])
//# sourceMappingURL=bundle.js.map
