import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const repository = {
    name: 'unform',
    description: 'forms in React',
    link : "https://github.com/unform/unform"
}

export function RepositoryList() {
    return (
        <section className="repository-List">
            <h1>Lista de repositórios</h1>


            <ul>

                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
           

            </ul>
        </section>
    );
}