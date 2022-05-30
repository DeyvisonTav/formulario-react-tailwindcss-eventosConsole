import React, { useState } from 'react'
export function Form(user) {
  const [email, setEmail] = useState(user ? user.email:'')
  const [senha, setSenha] = useState(user ? user.senha:'')

  function handleSubmitFomr(e) {
    e.preventDefault()
    console.log(email, senha)

    // limpar input

    setEmail('')
    setSenha('')
  }

  return (
    <div className="w-80  ">
      <h2 className="text-black text-center text-base ">formulário</h2>
      <br />
      <form
        className="bg-zinc-900 shadow-md rounded-md p-4 space-y-4"
        onSubmit={handleSubmitFomr}
      >
        <div>
          <label className="block text-base text-white mb-1" htmlFor="email">
            Email:
          </label>
          <input
            className=" bg-zinc-400 hover:bg-zinc-500 w-full  border-2 border-gray-800 focus:border-black rounded px-2 py-1 text-base text-white placeholder-zinc-100 focus:outline-none transition duration-150 ease-out hover:ease-in"
            onChange={e => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="digite seu email"
            value={email}
          />
        </div>
        <div>
          <label className="block text-base text-white mb-1" htmlFor="password">
            Senha:
          </label>
          <input
            className=" bg-zinc-400 hover:bg-zinc-500 w-full  border-2 border-gray-800 focus:border-black rounded px-2 py-1 text-base text-white placeholder-zinc-100 focus:outline-none transition duration-150 ease-out hover:ease-in"
            onChange={e => setSenha(e.target.value)}
            type="password"
            id="password"
            placeholder="digite sua senha"
            value={senha}
          />
        </div>
        <div>
          <button
            className="w-full text-sm bg-black hover:bg-gray-900 transition duration-150 ease-out hover:ease-in px-4 py-1 rounded text-white shadow "
            onSubmit={handleSubmitFomr}
          >
            enviar
          </button>
        </div>
      </form>
    </div>
  )
}
