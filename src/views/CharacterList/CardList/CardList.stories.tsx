import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';
import useLanguages from '../../../hooks/useLanguages/useLanguages';
import CardList from './CardList';

const character = {
	id: 1017100,
	name: 'A-Bomb (HAS)',
	image: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg',
	favorite: false,
};

const meta: Meta<typeof CardList> = {
	title: 'views/CharacterList/CardList',
	component: CardList,
	tags: ['autodocs'],
	decorators: withRouter,
	parameters: {
		docs: {
			page: () => <CardListDocumentation />,
		},
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
	args: character,
};

const CardListDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>CardList</h1>
					<p>
						The <code>CardList</code> component displays individual character cards with their
						image, name, and favorite status.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>id</strong>: Unique identifier of the character.
						</li>
						<li>
							<strong>image</strong>: URL of the character's image.
						</li>
						<li>
							<strong>name</strong>: Name of the character.
						</li>
						<li>
							<strong>favorite</strong>: Boolean indicating if the character is marked as favorite.
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
							The <code>CardList</code> component uses the <code>useContext</code> hook to toggle
							the favorite status of a character.
						</li>
						<li>
							The component changes the favorite icon based on the mouse hover state and the
							favorite status.
						</li>
					</ul>

					<h3>Testing</h3>
					<p>
						To ensure the quality and proper functioning of the <code>CardList</code> component,
						consider the following tests:
					</p>
					<ul>
						<li>
							<strong>Rendering</strong>: Verifies that the component renders correctly with the
							provided data.
						</li>
						<li>
							<strong>Favorite Toggle</strong>: Ensures the favorite button toggles the favorite
							status correctly.
						</li>
						<li>
							<strong>Mouse Hover</strong>: Checks that the icon changes correctly on mouse hover.
						</li>
					</ul>
				</div>
			) : (
				<div>
					<h1>CardList</h1>
					<p>
						El componente <code>CardList</code> muestra tarjetas individuales de personajes con su
						imagen, nombre y estado de favorito.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>id</strong>: Identificador único del personaje.
						</li>
						<li>
							<strong>image</strong>: URL de la imagen del personaje.
						</li>
						<li>
							<strong>name</strong>: Nombre del personaje.
						</li>
						<li>
							<strong>favorite</strong>: Booleano que indica si el personaje está marcado como
							favorito.
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
							El componente <code>CardList</code> utiliza el hook <code>useContext</code> para
							alternar el estado de favorito de un personaje.
						</li>
						<li>
							El componente cambia el icono de favorito según el estado del mouse hover y el estado
							de favorito.
						</li>
					</ul>

					<h3>Pruebas</h3>
					<p>
						Para asegurar la calidad y el correcto funcionamiento del componente{' '}
						<code>CardList</code>, considera las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización</strong>: Verifica que el componente se renderiza correctamente
							con los datos proporcionados.
						</li>
						<li>
							<strong>Toggle de Favorito</strong>: Asegura que el botón de favorito alterna el
							estado de favorito correctamente.
						</li>
						<li>
							<strong>Mouse Hover</strong>: Comprueba que el icono cambia correctamente al pasar el
							mouse.
						</li>
					</ul>
				</div>
			)}
		</>
	);
};
