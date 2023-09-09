"""empty message

Revision ID: fb7d15ccac2e
Revises: 8b1dc1de20c8
Create Date: 2023-09-10 00:30:58.418791

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fb7d15ccac2e'
down_revision = '8b1dc1de20c8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('Ticket', schema=None) as batch_op:
        batch_op.alter_column('ticket_Price',
               existing_type=sa.INTEGER(),
               type_=sa.Float(),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('Ticket', schema=None) as batch_op:
        batch_op.alter_column('ticket_Price',
               existing_type=sa.Float(),
               type_=sa.INTEGER(),
               existing_nullable=True)

    # ### end Alembic commands ###