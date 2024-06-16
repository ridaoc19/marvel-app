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

		const filterInput = canvas.getByPlaceholderText('SEARCH A CHARACTER...');
		expect(filterInput).toBeInTheDocument();

		await userEvent.type(filterInput, 'Spiderman');
		expect(filterInput).toHaveValue('Spiderman');
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
											The <code>Filter</code> component is used for filtering characters in the{' '}
											<code>CharacterList</code> view. It consists of an input field where users can enter
											filter criteria.
									</p>

									<h3>Usage</h3>
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
													<strong>Rendering</strong>: Verifies that the input field renders correctly.
											</li>
											<li>
													<strong>Filtering</strong>: Verifies that the input field updates the filter value
													correctly based on user input.
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
											El componente <code>Filter</code> se utiliza para filtrar personajes en la vista{' '}
											<code>CharacterList</code>. Consiste en un campo de entrada donde los usuarios pueden
											ingresar criterios de filtro.
									</p>

									<h3>Uso</h3>
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
													<strong>Renderización</strong>: Verifica que el campo de entrada se renderice
													correctamente.
											</li>
											<li>
													<strong>Filtrado</strong>: Verifica que el campo de entrada actualice correctamente
													el valor del filtro según la entrada del usuario.
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