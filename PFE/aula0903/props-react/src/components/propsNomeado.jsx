
//props nomeado
export default function PropsName({titulo, subtitulo, status = 'true'}) {
    return (
        <>
          <h1>{titulo}</h1>
          <h2>{subtitulo}</h2>
          <span>O status é {status}</span>
        </>
    )
}