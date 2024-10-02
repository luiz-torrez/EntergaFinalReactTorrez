import './ItemListContainer.css'
export default function ItemListContainer ({greeting}) {
    return <>
    <section>
        <h1 className="text-greeting">
            {greeting}
        </h1>
    </section>
    </>; 
    
      
}
