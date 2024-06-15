import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';
import useLanguages from '../../../hooks/useLanguages/useLanguages';
import MainCards from './CardsList';

const meta: Meta<typeof MainCards> = {
	title: 'views/CharacterList/CardsList',
	component: MainCards,
	tags: ['autodocs'],
	decorators: [withRouter],
	parameters: {
		docs: {
			page: () => <CardsListDocumentation />,
		},
		reactRouter: reactRouterParameters({
			location: {
				pathParams: { characterId: '42' },
			},
			routing: { path: '/character/:characterId' },
		}),
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Cards: Story = {
	args: {
		characters: [],
	},
};

const CardsListDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>CardsList</h1>
					<p>
						The <code>CardsList</code> component displays a list of character cards.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>characters</strong>: An array of character objects to be displayed.
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
							The <code>CardsList</code> component returns <code>null</code> if the{' '}
							<code>characters</code> array is empty.
						</li>
						<li>
							It maps over the <code>characters</code> array and renders a <code>CardList</code>{' '}
							component for each character.
						</li>
					</ul>

					<h3>Testing</h3>
					<p>
						To ensure the quality and proper functioning of the <code>CardsList</code> component,
						consider the following tests:
					</p>
					<ul>
						<li>
							<strong>Rendering</strong>: Verifies that the component renders correctly with the
							provided data.
						</li>
						<li>
							<strong>Empty State</strong>: Ensures the component returns <code>null</code> when the{' '}
							<code>characters</code> array is empty.
						</li>
					</ul>
				</div>
			) : (
				<div>
					<h1>CardsList</h1>
					<p>
						El componente <code>CardsList</code> muestra una lista de tarjetas de personajes.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>characters</strong>: Un array de objetos de personajes para mostrar.
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
							El componente <code>CardsList</code> devuelve <code>null</code> si el array{' '}
							<code>characters</code> está vacío.
						</li>
						<li>
							Recorre el array <code>characters</code> y renderiza un componente{' '}
							<code>CardList</code> para cada personaje.
						</li>
					</ul>

					<h3>Pruebas</h3>
					<p>
						Para asegurar la calidad y el correcto funcionamiento del componente{' '}
						<code>CardsList</code>, considera las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización</strong>: Verifica que el componente se renderiza correctamente
							con los datos proporcionados.
						</li>
						<li>
							<strong>Estado Vacío</strong>: Asegura que el componente devuelve <code>null</code>{' '}
							cuando el array <code>characters</code> está vacío.
						</li>
					</ul>
				</div>
			)}
		</>
	);
};
