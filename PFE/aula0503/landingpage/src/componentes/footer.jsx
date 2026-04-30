export default function Footer(){
    return(
        <footer>
            <p>
                ©
                <script>
                    const data_atual = nem Date();
                    document.write(data_atual.getFullYear());
                </script>
                Academia Fofitness. Todos os direitos reservados;
            </p>
        </footer>
    )
}