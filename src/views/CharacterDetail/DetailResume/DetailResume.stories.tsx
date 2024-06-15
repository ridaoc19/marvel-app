import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import useLanguages from '../../../hooks/useLanguages/useLanguages';
import DetailResume from './DetailResume';

// {
//   "id": 1017100,
//   "name": "A-Bomb (HAS)",
//   "description": "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
//   "image": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg",
//   "favorite": false,
//   "comics": [
//     {
//       "id": 47176,
//       "title": "FREE COMIC BOOK DAY 2013 1 (2013) #1",
//       "modified": "2019-06-25T17:31:51-0400",
//       "image": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/57ed5bc9040e3.jpg"
//     },
//     {
//       "id": 40628,
//       "title": "Hulk (2008) #55",
//       "modified": "2012-06-19T11:48:47-0400",
//       "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/5ba3d0869c543.jpg"
//     },
//     {
//       "id": 40630,
//       "title": "Hulk (2008) #54",
//       "modified": "2012-06-11T17:31:00-0400",
//       "image": "http://i.annihil.us/u/prod/marvel/i/mg/f/00/5ba3c7cd5f1e2.jpg"
//     },
//     {
//       "id": 40632,
//       "title": "Hulk (2008) #53",
//       "modified": "2012-06-12T15:18:39-0400",
//       "image": "http://i.annihil.us/u/prod/marvel/i/mg/2/00/5ba3bfcc55f5a.jpg"
//     }
//   ]
// }

const comic = {
	id: 47176,
	title: 'FREE COMIC BOOK DAY 2013 1 (2013) #1',
	modified: '2019-06-25T17:31:51-0400',
	image: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/57ed5bc9040e3.jpg',
};

const meta: Meta<typeof DetailResume> = {
	title: 'views/CharacterDetail/DetailResume',
	component: DetailResume,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <DetailResumeDocumentation />,
		},
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DetailsCard: Story = {
	args: comic,
};

const DetailResumeDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>DetailResume</h1>
					<p>
						The <code>DetailResume</code> component provides a detailed view of a character's profile, including their name, description, image, and a favorite button.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>id</strong>: The unique identifier of the character.
						</li>
						<li>
							<strong>name</strong>: The name of the character.
						</li>
						<li>
							<strong>description</strong>: The description of the character.
						</li>
						<li>
							<strong>favorite</strong>: Boolean indicating if the character is marked as favorite.
						</li>
						<li>
							<strong>image</strong>: The URL of the character's image.
						</li>
					</ul>

					<h3>Example Usage</h3>
					<pre>
						<code>
							<Primary />
							<Controls />
						</code>
					</pre>

					<h3>Additional Notes</h3>
					<ul>
						<li>
							The <code>DetailResume</code> component uses the <code>useContext</code> hook to toggle the favorite status of the character.
						</li>
					</ul>

					<h3>Testing</h3>
					<p>
						To ensure the quality and proper functioning of the <code>DetailResume</code> component, consider the following tests:
					</p>
					<ul>
						<li>
							<strong>Rendering</strong>: Verifies that the component renders correctly with the provided data.
						</li>
						<li>
							<strong>Toggle Favorite</strong>: Ensures the favorite button correctly toggles the favorite status.
						</li>
						<li>
							<strong>Mouse Events</strong>: Checks that mouse events (e.g., hover) function correctly.
						</li>
					</ul>
				</div>
			) : (
				<div>
					<h1>DetailResume</h1>
					<p>
						El componente <code>DetailResume</code> proporciona una vista detallada del perfil de un personaje, incluyendo su nombre, descripción, imagen y un botón de favorito.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>id</strong>: El identificador único del personaje.
						</li>
						<li>
							<strong>name</strong>: El nombre del personaje.
						</li>
						<li>
							<strong>description</strong>: La descripción del personaje.
						</li>
						<li>
							<strong>favorite</strong>: Booleano que indica si el personaje está marcado como favorito.
						</li>
						<li>
							<strong>image</strong>: La URL de la imagen del personaje.
						</li>
					</ul>

					<h3>Ejemplo de Uso</h3>
					<pre>
						<code>
							<Primary />
							<Controls />
						</code>
					</pre>

					<h3>Notas Adicionales</h3>
					<ul>
						<li>
							El componente <code>DetailResume</code> utiliza el hook <code>useContext</code> para alternar el estado de favorito del personaje.
						</li>
					</ul>

					<h3>Pruebas</h3>
					<p>
						Para asegurar la calidad y el correcto funcionamiento del componente <code>DetailResume</code>, considera las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización</strong>: Verifica que el componente se renderiza correctamente con los datos proporcionados.
						</li>
						<li>
							<strong>Alternar Favorito</strong>: Asegura que el botón de favorito alterna correctamente el estado de favorito.
						</li>
						<li>
							<strong>Eventos del Ratón</strong>: Comprueba que los eventos del ratón (por ejemplo, hover) funcionan correctamente.
						</li>
					</ul>
				</div>
			)}
		</>
	);
};