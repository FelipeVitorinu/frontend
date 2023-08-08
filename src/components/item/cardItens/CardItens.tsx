import React from 'react'
import { Link } from 'react-router-dom'
import Itens from '../../../models/Item'

interface CardItemProps {
  post: Itens
}

function CardItens({post}: CardItemProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <img src={post.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase '>{post.nome}</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{post.preco}</h4>
          <p>{post.quantidade}</p>
          <p>Categoria: {post.categoria?.descricao}</p>
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarPostagem/${post.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${post.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardItens