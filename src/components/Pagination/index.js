
const MAX_ITENS = 9
const MAX_LEFT = (MAX_ITENS - 1) / 2

export default function Pagination ({limit, total, offset, setOffset}){

    const current = offset ? (offset / limit ) + 1 : 1
    const pages = Math.ceil(total / limit)
    const maxFirst = Math.max(pages - (MAX_ITENS -1), 1)
    const first = Math.min(Math.max(current - MAX_LEFT, 1), maxFirst)
    // casso não fizer isso ele vai criar muito mais pagina pq ele vai so estava pegando a page atual e tirando maxleft
    // oq ver msm que esta na ultima page e o maxFirst
    // first serve para deixa no centro o intem atual

    // assim sempre que estiver nas ultima pagina ele vai exibir q° page - 8 ex: 13 - 8 = 5 vai exibir 5
    // assim não vai exibir mais page pq ex: ele vai pegar first que 5 no exemplo e vai ser 5 + o index__
    console.log(total)

    const handlePage = (page)=>{
        setOffset((page -1)* limit)
    }

    // Array.from({length: Math.min(MAX_ITENS, pages)})
    return(
        <ul className='paginaco'>
            <button onClick={()=> handlePage(current -1)}
                disabled= {current === 1}
            >
                Anterior
            </button>
            {Array.from({length: Math.min(MAX_ITENS, pages)}).map((_,index)=>{
                
                 return first + index
            }).map(page =>(
                <li key={page}>
                    <button
                        onClick={() => handlePage(page)}
                        className={current === page ? 'paginaco__iten--active' : null}
                    >
                        {page}
                    </button>
                </li>
            ))}
             <button onClick={()=> handlePage(current +1)}
                disabled= {current === pages}
            >
                Anterior
            </button>
        </ul>
    )
}