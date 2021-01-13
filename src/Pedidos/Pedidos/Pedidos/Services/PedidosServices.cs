using System;
using System.Collections.Generic;
using Pedidos.Models;
using System.Linq;
using System.Threading.Tasks;

namespace Pedidos.Services
{
    public class PedidosServices : IPedidosServices
    {
        private List<Models.Pedidos> Pedidos = new List<Models.Pedidos>();


        public bool DeletePedido(int id)
        {
            var pedidoDelete = Pedidos.Single(a => a.id == id);
            return Pedidos.Remove(pedidoDelete);
        }

        public Models.Pedidos GetPedido(int id)
        {
            var pedido = Pedidos.FirstOrDefault(s => s.id == id);
            return pedido;
        }

        public IEnumerable<Models.Pedidos> GetPedidos()
        {
            return Pedidos;
        }

        public Models.Pedidos PostPedido(Models.Pedidos nuevoPedido)
        {
            var lastpedido = Pedidos.OrderByDescending(a => a.id).FirstOrDefault();
            var nextID = lastpedido == null ? 1 : lastpedido.id + 1;
            nuevoPedido.id = nextID;
            Pedidos.Add(nuevoPedido);
            return nuevoPedido;
        }

        public Models.Pedidos PutPedido(int id, Models.Pedidos nuevoPedido)
        {
            var pedidoUpdate = Pedidos.Single(a => a.id == nuevoPedido.id);
            pedidoUpdate.idRepartidorAsignado = nuevoPedido.idRepartidorAsignado;
            pedidoUpdate.idCliente = nuevoPedido.idCliente;
            pedidoUpdate.descripcionPedido = nuevoPedido.descripcionPedido;
            pedidoUpdate.itemsPedido = nuevoPedido.itemsPedido;
            pedidoUpdate.direccionEntrega = nuevoPedido.direccionEntrega;
            pedidoUpdate.pedidoStatus = nuevoPedido.pedidoStatus;
            pedidoUpdate.notasEntrega = nuevoPedido.notasEntrega;
            return pedidoUpdate;
        }
    }
}
