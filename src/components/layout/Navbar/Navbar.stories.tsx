import { Controls, Primary, Story } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';

import useLanguages from '../../../hooks/useLanguages/useLanguages';
import Navbar from './Navbar';
import { expect, fireEvent, within } from '@storybook/test';

const meta: Meta<typeof Navbar> = {
	title: 'components/layout/Navbar',
	component: Navbar,
	tags: ['autodocs'],
	decorators: [withRouter],
	parameters: {
		reactRouter: reactRouterParameters({
			routing: { path: '/' },
		}),
		docs: {
			page: () => <NavbarDocumentation />,
		},
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Navbars: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const logoElement = canvas.getByTestId('svg-logo');
		expect(logoElement).toBeInTheDocument();

		const favoritesIconElement = canvas.getByTestId('svg-favorites');
		expect(favoritesIconElement).toBeInTheDocument();

		const buttonFavorites = canvasElement.querySelector('.navbar__favorites');
		fireEvent.click(buttonFavorites!);

		const totalFavoritesElement = canvas.getByText(0);
		expect(totalFavoritesElement).toBeInTheDocument();

		const linkLogo = canvas.getAllByRole('link');
		fireEvent.click(linkLogo[0]);
	},
};

const NavbarDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>Navbar</h1>
					<p>
						The <code>Navbar</code> component is a navigation bar that is displayed at the top of
						the application.
					</p>

					<h3>Props</h3>
					<p>This component does not receive props.</p>

					<h3>Content</h3>
					<ul>
						<li>
							<strong>Logo</strong>: A link that redirects to the main page (<code>/</code>). It
							contains an SVG logo.
						</li>
						<li>
							<strong>Favorites Icon</strong>: An icon that toggles the favorites view and displays
							the total number of favorites.
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
							This component uses <code>react-router-dom</code> to handle navigation.
						</li>
						<li>
							The favorites icon toggles the view between all characters and favorite characters.
						</li>
					</ul>

					<h3>Tests</h3>
					<p>
						To ensure the quality and proper functionality of the <code>Navbar</code> component, the
						following tests have been included:
					</p>
					<ul>
						<li>
							<strong>Rendering of the Logo</strong>: It is verified that the logo of the{' '}
							<code>Navbar</code> is rendered correctly, including its link.
						</li>
						<li>
							<strong>Rendering of the Favorites Icon</strong>: It is verified that the favorites
							icon is rendered correctly.
						</li>
						<li>
							<strong>Click on Favorites Icon</strong>: It is checked that clicking on the favorites
							icon updates the state and character filter type.
						</li>
						<li>
							<strong>Rendering of the Total Favorites</strong>: It is verified that the total
							number of favorites is displayed correctly.
						</li>
						<li>
							<strong>Click on Logo</strong>: It is checked that clicking the logo redirects to the
							main page and updates the state and character filter.
						</li>
						<li>
							<strong>Favorites Icon Toggle</strong>: It is verified that toggling the favorites
							icon changes between the appropriate icons based on the favorites state.
						</li>
					</ul>
					<p>
						These tests ensure that the critical elements of the <code>Navbar</code> are rendered
						and function correctly. It can be verified in <code>Interactions</code>.
					</p>
				</div>
			) : (
				<div>
					<h1>Navbar</h1>
					<p>
						El componente <code>Navbar</code> es una barra de navegación que se muestra en la parte
						superior de la aplicación.
					</p>

					<h3>Props</h3>
					<p>Este componente no recibe props.</p>

					<h3>Contenido</h3>
					<ul>
						<li>
							<strong>Logo</strong>: Un enlace que redirige a la página principal (<code>/</code>).
							Contiene un logo SVG.
						</li>
						<li>
							<strong>Icono de Favoritos</strong>: Un icono que alterna la vista de favoritos y
							muestra el número total de favoritos.
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
							Este componente utiliza <code>react-router-dom</code> para manejar la navegación.
						</li>
						<li>
							El icono de favoritos alterna la vista entre todos los personajes y los personajes
							favoritos.
						</li>
					</ul>

					<h3>Pruebas</h3>
					<p>
						Para asegurar la calidad y el correcto funcionamiento del componente <code>Navbar</code>
						, se han incluido las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización del Logo</strong>: Se verifica que el logo del{' '}
							<code>Navbar</code> se renderiza correctamente, incluyendo su enlace.
						</li>
						<li>
							<strong>Renderización del Icono de Favoritos</strong>: Se verifica que el icono de
							favoritos se renderiza correctamente.
						</li>
						<li>
							<strong>Click en el Icono de Favoritos</strong>: Se comprueba que al hacer clic en el
							icono de favoritos se actualiza el estado y el tipo de filtro de personajes.
						</li>
						<li>
							<strong>Renderización del Total de Favoritos</strong>: Se verifica que el número total
							de favoritos se muestra correctamente.
						</li>
						<li>
							<strong>Click en el Logo</strong>: Se comprueba que al hacer clic en el logo se
							redirige a la página principal y se actualiza el estado y el filtro de personajes.
						</li>
						<li>
							<strong>Alternar Icono de Favoritos</strong>: Se verifica que al alternar el icono de
							favoritos, cambia entre los iconos adecuados según el estado de favoritos.
						</li>
					</ul>
					<p>
						Estas pruebas aseguran que los elementos críticos del <code>Navbar</code> se rendericen
						y funcionen correctamente. Se puede verificar en <code>Interactions</code>.
					</p>
				</div>
			)}
		</>
	);
};
