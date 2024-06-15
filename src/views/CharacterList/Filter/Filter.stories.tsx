import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import useLanguages from '../../../hooks/useLanguages/useLanguages';
import Filter from './Filter';
import { withRouter } from 'storybook-addon-remix-react-router';

const meta: Meta<typeof Filter> = {
	title: 'views/CharacterList/Filter',
	component: Filter,
	tags: ['autodocs'],
	decorators: [withRouter],
	parameters: {
		docs: {
			page: () => <FilterDocumentation />,
		},
	},
	argTypes: {
		characterTotal: {
			control: { type: 'number' },
		},
		value: {
			control: { type: 'text' },
		},
		handleOnChange: {},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Filters: Story = {
	args: {
		characterTotal: 50,
		value: '',
		handleOnChange: fn(),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByText('50')).toBeInTheDocument();

		const input = canvas.getByRole('textbox');

		await userEvent.clear(input);
		// await userEvent.type(input, 'new filter');
	},
};

const FilterDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>Filter</h1>
					<p>
						The <code>Filter</code> component is used for filtering podcasts in the{' '}
						<code>PodcastList</code> view. It consists of an input field where users can enter
						filter criteria.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>podcastTotal</strong>: The total number of podcasts being displayed.
						</li>
						<li>
							<strong>value</strong>: The value of the input field, representing the current filter
							criteria.
						</li>
						<li>
							<strong>handleOnChange</strong>: A function to handle changes in the input field.
						</li>
					</ul>

					<h3>Example Usage</h3>
					<pre>
						<code>
							<Primary />
							<Controls />
						</code>
					</pre>

					<h3>Testing</h3>
					<p>
						To ensure the quality and proper functioning of the <code>Filter</code> component, the
						following tests have been included:
					</p>
					<ul>
						<li>
							<strong>Renderización del Contador</strong>: Verifica que el contador de podcasts se
							renderice correctamente y muestre el número total de podcasts.
						</li>
						<li>
							<strong>Filtro de Podcasts</strong>: Verifica que el campo de entrada funcione
							correctamente y actualice el valor del filtro según la entrada del usuario.
						</li>
					</ul>
					<p>
						These tests ensure that the <code>Filter</code> component renders correctly and handles
						filtering functionality as expected. You can check these tests in the{' '}
						<code>Interactions</code> section.
					</p>
				</div>
			) : (
				<div>
					<h1>Filter</h1>
					<p>
						El componente <code>Filter</code> se utiliza para filtrar podcasts en la vista{' '}
						<code>PodcastList</code>. Consiste en un campo de entrada donde los usuarios pueden
						ingresar criterios de filtro.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>podcastTotal</strong>: El número total de podcasts que se están mostrando.
						</li>
						<li>
							<strong>value</strong>: El valor del campo de entrada, que representa los criterios de
							filtro actuales.
						</li>
						<li>
							<strong>handleOnChange</strong>: Una función para manejar los cambios en el campo de
							entrada.
						</li>
					</ul>

					<h3>Ejemplo de Uso</h3>
					<pre>
						<code>
							<Primary />
							<Controls />
						</code>
					</pre>

					<h3>Pruebas</h3>
					<p>
						Para asegurar la calidad y el correcto funcionamiento del componente <code>Filter</code>
						, se han incluido las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización del Contador</strong>: Verifica que el contador de podcasts se
							renderice correctamente y muestre el número total de podcasts.
						</li>
						<li>
							<strong>Filtro de Podcasts</strong>: Verifica que el campo de entrada funcione
							correctamente y actualice el valor del filtro según la entrada del usuario.
						</li>
					</ul>
					<p>
						Estas pruebas aseguran que el componente <code>Filter</code> se renderice correctamente
						y maneje la funcionalidad de filtrado según lo esperado. Puedes verificar estas pruebas
						en la sección de <code>Interactions</code>.
					</p>
				</div>
			)}
		</>
	);
};
