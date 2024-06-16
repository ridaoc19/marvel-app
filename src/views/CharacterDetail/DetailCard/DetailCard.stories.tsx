import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import useLanguages from '../../../hooks/useLanguages/useLanguages';
import DetailCard from './DetailCard';
import { expect, within } from '@storybook/test';

const comic = {
	id: 47176,
	title: 'FREE COMIC BOOK DAY 2013 1 (2013) #1',
	modified: '2019-06-25T17:31:51-0400',
	image: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/57ed5bc9040e3.jpg',
};

const meta: Meta<typeof DetailCard> = {
	title: 'views/CharacterDetail/DetailCard',
	component: DetailCard,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <DetailCardDocumentation />,
		},
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DetailsCard: Story = {
	args: comic,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const detailCardComponent = canvas.getByTestId('detail-card');
		expect(detailCardComponent).toBeInTheDocument();

		const titleElement = canvas.getByText(/Free Comic Book Day 2013 1 \(2013\) #1/i);
		expect(titleElement).toBeInTheDocument();

		const yearElement = canvas.getByText(/2019/);
		expect(yearElement).toBeInTheDocument();
	},
};

const DetailCardDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>DetailCard</h1>
					<p>
						The <code>DetailCard</code> component renders a single card representing a comic with
						its image, title, and modified date.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>image</strong>: The URL of the comic's image.
						</li>
						<li>
							<strong>title</strong>: The title of the comic.
						</li>
						<li>
							<strong>modified</strong>: The date when the comic was last modified.
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
							Ensure that the <code>DetailCard</code> component correctly formats the title and
							displays the year from the <code>modified</code> date.
						</li>
					</ul>

					<h3>Testing</h3>
					<p>
						To verify the functionality and appearance of the <code>DetailCard</code> component,
						consider the following tests:
					</p>
					<ul>
						<li>
							<strong>Rendering</strong>: Confirm that the component renders without errors with the
							provided props.
						</li>
						<li>
							<strong>Year Display</strong>: Ensure that the year displayed matches the year from
							the <code>modified</code> date.
						</li>
					</ul>
				</div>
			) : (
				<div>
					<h1>DetailCard</h1>
					<p>
						El componente <code>DetailCard</code> renderiza una tarjeta única que representa un
						cómic con su imagen, título y fecha de modificación.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>image</strong>: La URL de la imagen del cómic.
						</li>
						<li>
							<strong>title</strong>: El título del cómic.
						</li>
						<li>
							<strong>modified</strong>: La fecha en que se modificó por última vez el cómic.
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
							Asegúrate de que el componente <code>DetailCard</code> formatee correctamente el
							título y muestre el año de la fecha de <code>modified</code>.
						</li>
					</ul>

					<h3>Pruebas</h3>
					<p>
						Para verificar la funcionalidad y apariencia del componente <code>DetailCard</code>,
						considera las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización</strong>: Confirmar que el componente se renderiza sin errores
							con las props proporcionadas.
						</li>
						<li>
							<strong>Visualización del Año</strong>: Asegurarse de que el año mostrado coincida con
							el año de la fecha de <code>modified</code>.
						</li>
					</ul>
				</div>
			)}
		</>
	);
};
